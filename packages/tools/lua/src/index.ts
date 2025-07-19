import { parse } from 'luaparse'

import type {
	Chunk,
	Options,
} from 'luaparse'

export type AST = Chunk
export type DeserializeOptions = Partial<Options>
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

	return parse( input, options )

}

export const serialize = async (
	_input: AST,
	_options?: SerializeOptions,
): Promise<string> => {

	throw new Error( 'serialize() not implemented for Lua AST' )

}
