// @ts-ignore
import luamin    from 'luamin'
import { parse } from 'luaparse'

import type {
	Chunk,
	Options,
} from 'luaparse'

export type AST = Chunk
export type DeserializeOptions = Omit<Partial<Options>, 'scope'>
export type SerializeOptions = never // No serialize built-in

/**
 * Parse a Lua string into an AST.
 *
 * @param   {string}             input     - Lua source code
 * @param   {DeserializeOptions} [options] - Parser options
 * @returns {Promise<AST>}                 - Lua AST
 */
export const deserialize = async (
	input: string,
	options?: DeserializeOptions,
): Promise<AST> => {

	return parse( input, {
		...options,
		scope : true,
	} )

}

export const serialize = async (
	input: AST,
	_options?: SerializeOptions,
): Promise<string> => {

	return await luamin.minify( input )

}
