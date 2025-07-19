import rehypeDocument  from 'rehype-document'
import rehypeFormat    from 'rehype-format'
import rehypeParse     from 'rehype-parse'
import rehypeRemark    from 'rehype-remark'
import rehypeStringify from 'rehype-stringify'
import remarkParse     from 'remark-parse'
import remarkRehype    from 'remark-rehype'
import remarkStringify from 'remark-stringify'
import { unified }     from 'unified'

import type {
	RehypeDocumentOptions,
	RehypeFormatOptions,
	RehypeParseOptions,
	RehypeRemarkOptions,
	RehypeStringifyOptions,
	RemarkRehypeOptions,
	RemarkStringifyOptions,
} from './types'

export type FromMarkdownOptions = {
	parse?     : RehypeParseOptions
	to?        : RemarkRehypeOptions
	document?  : RehypeDocumentOptions
	format?    : RehypeFormatOptions
	stringify? : RemarkStringifyOptions
}

/**
 * Convert Markdown to HTML.
 *
 * @param   {string}              input     - Markdown string
 * @param   {FromMarkdownOptions} [options] - Options for the conversion
 * @returns {Promise<string>}               Promise that resolves to the HTML string
 */
export const fromMarkdown = async ( input: string, options?: FromMarkdownOptions ): Promise<string> => {

	const file = await unified()
		.use( remarkParse, options?.parse )
		.use( remarkRehype, options?.to )
		.use( rehypeDocument, options?.document )
		.use( rehypeFormat, options?.format )
		.use( rehypeStringify, options?.stringify )
		.process( input )

	return String( file )

}

export type ToMarkdownOptions = {
	parse?     : RehypeParseOptions
	to?        : RehypeRemarkOptions
	stringify? : RemarkStringifyOptions
}

/**
 * Convert HTML to Markdown.
 *
 * @param   {string}            input     - HTML string
 * @param   {ToMarkdownOptions} [options] - Options for the conversion
 * @returns {Promise<string>}             Promise that resolves to the Markdown string
 */
export const toMarkdown = async ( input: string, options?: ToMarkdownOptions ): Promise<string> => {

	const file = await unified()
		.use( rehypeParse, {
			fragment : true,
			...options?.parse,
		} )
		.use( rehypeRemark, options?.to )
		.use( remarkStringify, options?.stringify )
		.process( input )

	return String( file )

}

export type DeserializeOptions = { parse?: RehypeParseOptions }

const getDeserializeProcessor = ( options?: DeserializeOptions ) => unified().use( rehypeParse, options?.parse )

type Processor = Awaited<ReturnType<typeof getDeserializeProcessor>>
type HTMLData = Awaited<ReturnType<Processor['parse']>>

/**
 * Deserialize an HTML string into a JavaScript object.
 *
 * @param   {string}             html      - HTML string
 * @param   {DeserializeOptions} [options] - Options for the deserialization
 * @returns {Promise<HTMLData>}            Promise that resolves to the deserialized object
 */
export const deserialize = async ( html: string, options?: DeserializeOptions ): Promise<HTMLData> => {

	return await getDeserializeProcessor( options )
		.parse( html )

}

export type SerializeOptions = { stringify?: RehypeStringifyOptions }
const getSerializeProcessor = ( options?: SerializeOptions ) => unified().use( rehypeStringify, options?.stringify )

/**
 * Serialize a JavaScript object into an HTML string.
 *
 * @template I - The type of the HTML data to serialize
 * @param   {I}                input     - The HTML data to serialize
 * @param   {SerializeOptions} [options] - Options for the serialization
 * @returns {Promise<string>}            - A promise that resolves to the serialized HTML string
 */
export const serialize = async <I extends HTMLData>( input: I, options?: SerializeOptions ): Promise<string> => {

	return await getSerializeProcessor( options )
		.stringify( input )

}
