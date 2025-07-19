import {
	exec,
	joinPath,
} from '@dovenv/core/utils'

/**
 * Run the build
 *
 * @param   {object}        [opts]           - Options
 * @param   {string}        [opts.cwd]       - The current working directory
 * @param   {string}        [opts.input]     - The input file
 * @param   {string}        [opts.outputDir] - The output directory
 * @returns {Promise<void>}
 */
export const run = async opts => {

	const {
		cwd = '.',
		input = 'src/index.ts',
		outputDir = 'dist',
	} = opts || {}

	const inputPath  = joinPath( cwd, input )
	const outputPath = joinPath( cwd, outputDir )

	const nccCommand = [
		'pnpm dlx @vercel/ncc build',
		inputPath,
		'-o',
		outputPath,
		'-C',
		'--transpile-only',
	].join( ' ' )

	const tsupCommand = [
		'tsup',
		inputPath,
		'--dts-only',
		'--out-dir',
		outputPath,
		'--format',
		'esm',
	].join( ' ' )

	await exec( nccCommand )
	await exec( tsupCommand )

}
