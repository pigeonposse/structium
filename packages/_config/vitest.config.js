import { defineConfig } from 'vitest/config'

export default defineConfig( { test : { projects : [
	{ test : {
		include     : [ 'src/**/*.{test,spec}.ts' ],
		name        : 'unit',
		environment : 'node',
	} },
	{ test : {
		include : [ 'src/**/*.{test,spec}.ts' ],
		name    : 'browser',
		browser : {
			provider           : 'playwright',
			screenshotFailures : false,
			connectTimeout     : 60000,
			// enabled   : true,
			headless           : true,
			instances          : [ { browser: 'chromium' } ],
		},
	} },
] } } )
