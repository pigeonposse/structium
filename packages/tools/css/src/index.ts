import postcss, { Root } from 'postcss'

export type CSSAST = Root

/**
 * Deserialize a CSS string into a PostCSS AST.
 *
 * @param   {string}          input - CSS source string
 * @returns {Promise<CSSAST>}       Parsed CSS AST (PostCSS Root node)
 */
export const deserialize = async ( input: string ): Promise<CSSAST> => {

	return postcss.parse( input )

}

/**
 * Serialize a PostCSS AST back into a CSS string.
 *
 * @param   {CSSAST}          input - PostCSS Root node
 * @returns {Promise<string>}       CSS string
 */
export const serialize = async ( input: CSSAST ): Promise<string> => {

	return input.toString()

}
