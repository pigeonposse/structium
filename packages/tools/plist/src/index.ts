
import {
	parse,
	serialize as plistSerialize,
} from '@plist/plist'

const FORMAT = {
	binary   : 0,
	xml      : 1,
	openstep : 2,
}

export type AST = ReturnType<typeof parse>

/**
 * Deserialize a string into a Plist AST.
 *
 * @param   {string}       input - CSS source string
 * @returns {Promise<AST>}       Parsed CSS AST (Plist Root node)
 */
export const deserialize = async ( input: string ): Promise<AST> => {

	return parse( input )

}

export type SerializeOptions = { format?: keyof typeof FORMAT }
/**
 * Serialize a Plist AST back into a CSS string.
 *
 * @param   {AST}              input     - Plist node
 * @param   {SerializeOptions} [options] - Options
 * @returns {Promise<string>}            CSS string
 */
export const serialize = async ( input: AST, options?: SerializeOptions ): Promise<string> => {

	return plistSerialize( input, options?.format ? FORMAT[options.format] : FORMAT.xml )

}
