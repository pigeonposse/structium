import { Parser } from 'node-sql-parser'

import type {
	AST as SqlAST,
	Option,
} from 'node-sql-parser'

export type AST = SqlAST | SqlAST[]

export type DeserializeOptions = Option

/**
 * Deserialize a SQL string into a SQL AST.
 *
 * @param   {string}             input     - SQL source string
 * @param   {DeserializeOptions} [options] - Options
 * @returns {Promise<AST>}                 Parsed SQL AST (SQL Root node)
 */
export const deserialize = async ( input: string, options?: DeserializeOptions ): Promise<AST> => {

	const parser = new Parser()
	return parser.astify( input, options )

}

export type SerializeOptions = Option

/**
 * Serialize a SQL AST back into a SQL string.
 *
 * @param   {AST}              input     - SQL Root node
 * @param   {SerializeOptions} [options] - Options
 * @returns {Promise<string>}            SQL string
 */
export const serialize = async ( input: AST, options?: SerializeOptions ): Promise<string> => {

	const parser = new Parser()
	return parser.sqlify( input, options )

}
