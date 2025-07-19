import {
	parse,
	stringify,
} from 'cson-parser'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CSONData = any

/**
 * Deserialize a CSON string into a CSON (Coffescript) Object.
 *
 * @param   {string}            input - source string
 * @returns {Promise<CSONData>}       CSON Object
 */
export const deserialize = async ( input: string ): Promise<CSONData> => {

	return parse( input )

}

/**
 * Serialize a CSON (Coffescript) Object back into a string.
 *
 * @param   {CSONData}        input - Input
 * @returns {Promise<string>}       CSS string
 */
export const serialize = async ( input: CSONData ): Promise<string> => {

	return stringify( input )

}
