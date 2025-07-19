import * as acorn   from 'acorn'
import * as astring from 'astring'

import type {
	Options as AcornOptions,
	Program,
} from 'acorn'
import type { Options as AstringOptions } from 'astring'

export type JSData = Program

export type DeserializeOptions = AcornOptions

/**
 * Deserialize a JavaScript code string into an ESTree-compatible AST.
 *
 * @template Res - The expected return AST type (default is ESTree.Program)
 * @param   {string}             code      - JavaScript source code
 * @param   {DeserializeOptions} [options] - Acorn parsing options
 * @returns {Promise<Res>}                 - Parsed JavaScript AST
 * @example
 * const ast = await deserialize('const a = 1')
 * console.log(ast.body)
 */
export const deserialize = async <Res extends JSData = JSData>(
	code: string,
	options?: DeserializeOptions,
): Promise<Res> => {

	return acorn.parse( code, {
		ecmaVersion : 'latest',
		sourceType  : 'module',
		...options,
	} ) as Res

}

export type SerializeOptions = AstringOptions

/**
 * Serialize an ESTree-compatible AST back into JavaScript code.
 *
 * @param   {JSData}           ast       - ESTree-compatible Program node
 * @param   {SerializeOptions} [options] - Astring options
 * @returns {Promise<string>}            - Generated JavaScript source code
 * @example
 * const code = await serialize(ast)
 * console.log(code)
 */
export const serialize = async (
	ast: JSData,
	options?: SerializeOptions,
): Promise<string> => {

	return astring.generate( ast, options )

}
