
/** @type {import('unbuild').BuildConfig} */
export const config = {
	sourcemap   : false,
	declaration : true,
	rollup      : {
		inlineDependencies : true,
		emitCJS            : false,
		esbuild            : {
			minify : false,
			target : 'es2022',
		},
	},
	failOnWarn : true,
}
