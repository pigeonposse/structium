
import {
	XMLParser,
	XMLBuilder,
	type validationOptions,
	type X2jOptions,
} from 'fast-xml-parser'

import type { CommonObj } from '../../_shared'

type DeserializeOptions = X2jOptions & { validation: validationOptions }

/**
 * Parses an XML content string into a JavaScript object.
 *
 * @template                Res       - The expected return type of the parsed object.
 * @param    {string}       input     - The XML content string to be parsed.
 * @param    {object}       [options] - Options to pass to the XML parser.
 * @returns  {Promise<Res>}           - A promise that resolves to the parsed XML as an object.
 * @throws {Error} If there is an error parsing the XML content.
 */
export const deserialize = async <Res extends CommonObj = CommonObj>( input: string, options?: DeserializeOptions ) => {

	try {

		const {
			validation, ...rest
		} = options || {}

		const parser = new XMLParser( rest )
		const res    = parser.parse( input, validation )

		return res as Res

	}
	catch ( error ) {

		// @ts-ignore
		throw new Error( `Error parsing XML content: ${error.message}` )

	}

}

/**
 * Converts a JavaScript object into an XML string.
 *
 * @template                   I     - The type of the object to be converted.
 * @param    {I}               input - The object to be converted.
 * @returns  {Promise<string>}       - A promise that resolves to the XML string.
 */
export const serialize = async <I extends CommonObj = CommonObj>( input: I ) => {

	const builder = new XMLBuilder()
	return builder.build( input )

}

