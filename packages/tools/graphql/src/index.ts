import {
	parse,
	print,
	type ParseOptions,
	type DocumentNode,
} from 'graphql'

export type AST = DocumentNode
export type DeserializeOptions = ParseOptions

/**
 * Deserialize a GraphQL string into a GraphQL AST.
 *
 * @param   {string}             input     - GraphQL source string
 * @param   {DeserializeOptions} [options] - Optional parsing options
 * @returns {Promise<AST>}                 - GraphQL AST (DocumentNode)
 */
export const deserialize = async (
	input: string,
	options?: DeserializeOptions,
): Promise<AST> => {

	return parse( input, options )

}

export type SerializeOptions = undefined // graphql.print doesn't take options

/**
 * Serialize a GraphQL AST back into a GraphQL string.
 *
 * @param   {AST}             input - GraphQL AST (DocumentNode)
 * @returns {Promise<string>}       - GraphQL string
 */
export const serialize = async (
	input: AST,
): Promise<string> => {

	return print( input )

}
