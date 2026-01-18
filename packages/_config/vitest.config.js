import { playwright }   from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

export default defineConfig( { test : {
	testTimeout : 20000, // 20s
	projects    : [
		{ test : {
			testTimeout : 20000, // 20s
			include     : [ 'src/**/*.{test,spec}.ts' ],
			name        : 'unit',
			environment : 'node',
		} },
		{ test : {
			testTimeout : 60000, // 20s
			include     : [ 'src/**/*.{test,spec}.ts' ],
			name        : 'browser',
			browser     : {

				provider           : playwright(),
				screenshotFailures : false,
				connectTimeout     : 60000, // 60s
				// enabled   : true,
				headless           : true,
				instances          : [ { browser: 'chromium' } ],
			},
		} },
	],
} } )
