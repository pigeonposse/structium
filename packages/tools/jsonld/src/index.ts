import {
	expand,
	compact,
} from 'jsonld'

export type AST = Awaited<ReturnType<typeof expand>>
export type DeserializeOptions = Parameters<typeof expand>[1]
export type SerializeOptions = Parameters<typeof compact>[2] & { context?: Parameters<typeof compact>[1] }

/**
 * Deserialize a JSON-LD string into an expanded AST.
 *
 * @param   {string}             input     - JSON-LD source string
 * @param   {DeserializeOptions} [options] - Options for expansion
 * @returns {Promise<AST>}                 - Expanded JSON-LD (AST)
 */
export const deserialize = async (
	input: string,
	options?: DeserializeOptions,
): Promise<AST> => {

	const json = JSON.parse( input )
	return await expand( json, options )

}

/**
 * Serialize a JSON-LD AST back into a compact JSON-LD string.
 *
 * @param   {AST}              input     - Expanded JSON-LD
 * @param   {SerializeOptions} [options] - Options for compacting
 * @returns {Promise<string>}            - Compact JSON-LD string
 */
export const serialize = async (
	input: AST,
	options?: SerializeOptions,
): Promise<string> => {

	const {
		context, ...rest
	} = options || {}
	const compacted = await compact( input, context || {}, rest )
	return JSON.stringify( compacted, null, 2 )

}
