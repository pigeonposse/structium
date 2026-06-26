
import {
	getDirFromURL,
	IS_TEST, resolve,
} from './_shared'

import type {
	Func, SafeSecondParam,
} from './_shared-types'

type Options<D, S> = {
	deserialize? : D
	serialize?   : S
}

type ToolsProps = {
	/**
	 * Must be the package Dir
	 */
	packageDir? : string
}

export {
	getDirFromURL,
}
export class Tools<D extends Func, S extends Func> {

	props
	constructor( props?: ToolsProps ) {

		this.props = props

	}

	/**
	 * Dynamically loads the serialization and deserialization tools based on the current environment.
	 * Uses the package directory from props or process.cwd() as the base path for resolution.
	 *
	 * @returns {Promise<{deserialize: D, serialize: S}>} A promise resolving to an object containing the required functions.
	 * @throws {Error} If the module cannot be dynamically imported from the resolved path.
	 */
	async get( ) {

		const baseDir      = this.props?.packageDir || process.cwd()
		const targetPath   = IS_TEST ? './dist/index.js' : './src/index.ts'
		const absolutePath = resolve( baseDir, targetPath )

		return await import( absolutePath ) as {
			deserialize : D
			serialize   : S
		}

	}

	async #process(
		data: string,
		options?: Options<SafeSecondParam<D>, SafeSecondParam<S>>,
	) {

		const {
			deserialize: dFunc, serialize: sFunc,
		} = await this.get()

		const deserialize = await dFunc( data, options?.deserialize )
		const serialize   = await sFunc( deserialize, options?.serialize )

		return {
			deserialize,
			serialize,
		}

	}

	/**
	 * Executes the complete deserialization and serialization lifecycle for the provided data string.
	 *
	 * @param   {string}                                          data      - The raw content string to be processed.
	 * @param   {Options<SafeSecondParam<D>, SafeSecondParam<S>>} [options] - Configuration options for the deserialize and serialize steps.
	 * @returns {Promise<void>}                                             Outputs the processing results to the console.
	 */
	async run(
		data: string,
		options?: Options<SafeSecondParam<D>, SafeSecondParam<S>>,
	) {

		const {
			deserialize, serialize,
		} = await this.#process( data, options )

		console.dir( {
			data,
			deserialize,
			serialize,
		}, { depth: Infinity } )

	}

	async runError(
		data: string,
		options?: Options<SafeSecondParam<D>, SafeSecondParam<S>>,
	) {

		const error = await ( async () => {

			try {

				await this.#process( data, options )

			}
			catch ( e ) {

				return e instanceof Error ? e.message : undefined

			}

		} )()
		if ( !error ) throw new Error( 'objError must return a Error' )

		console.dir( {
			data,
			error,
		}, { depth: Infinity } )

	}

}

