
import IniLib from 'ini'

import { type CommonObj } from '../../_shared'

const isHTML = ( input: string ): boolean => {

	// Expresión regular para detectar etiquetas HTML
	const htmlTagPattern = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/i
	return htmlTagPattern.test( input.trim() )

}

export type DeserializeOptions = IniLib.DecodeOptions

/**
 * Deserialize an INI string into a JavaScript object.
 *
 * @template                Res       - The expected return type of the deserialized object
 * @param    {string}       input     - The INI content string
 * @param    {object}       [options] - Options
 * @returns  {Promise<Res>}           - The deserialized JavaScript object
 * @throws  {Error}          - If the content is detected as HTML
 */

export const deserialize = async <Res extends CommonObj = CommonObj>( input: string, options?: DeserializeOptions ) => {

	const isHTMLContent = isHTML( input )
	if ( isHTMLContent ) throw new Error( 'Content is HTML' )
	return IniLib.parse( input, options ) as Res

}

export type SerializeOptions = IniLib.EncodeOptions

/**
 * Serialize a JavaScript object into an INI string.
 *
 * @template                    I         - The type of the object to be converted.
 * @param    {I}                input     - The object to be converted.
 * @param    {SerializeOptions} [options] - Options to pass to `ini.stringify`
 * @returns  {Promise<string>}            - A promise that resolves to the INI string.
 */
export const serialize = async <I extends CommonObj>( input: I, options?: SerializeOptions ): Promise<string> => {

	return IniLib.stringify( input, {
		...options || {},
		align : true,
	} )

}

