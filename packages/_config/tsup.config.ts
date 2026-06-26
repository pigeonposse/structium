import { defineConfig } from 'tsup'

export {
	defineConfig,
}
export const bundleConfig = defineConfig( {
	entry  : [ 'src/index.ts' ],
	format : [ 'esm' ],
	target : 'es2022',
	dts    : true,
	clean  : true,
	minify : false,
	bundle : true,
} )
