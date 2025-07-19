// mARKDOWN deserializer/Serializer

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
	RemarkParseOptions,
	RemarkRehypeOptions,
	RemarkStringifyOptions,
} from './types'

export type FromHTMLToMarkdownOptions = {
	parse?     : RehypeParseOptions
	to?        : RehypeRemarkOptions
	stringify? : RemarkStringifyOptions
}

export type ToHTMLFromMarkdownOptions = {
	parse?     : never
	to?        : RemarkRehypeOptions
	document?  : RehypeDocumentOptions
	format?    : RehypeFormatOptions
	stringify? : RehypeStringifyOptions
}

export type DeserializeOptions = { parse?: RemarkParseOptions }

export type SerializeOptions = { stringify?: RemarkStringifyOptions }

const getDeserializeProcessor = ( options?: DeserializeOptions ) =>
	unified().use( remarkParse, options?.parse )

const getSerializeProcessor = ( options?: SerializeOptions ) =>
	unified().use( remarkStringify, options?.stringify )

type Processor = Awaited<ReturnType<typeof getDeserializeProcessor>>
type MarkdownData = Awaited<ReturnType<Processor['parse']>>

/**
 * Deserialize a Markdown string into a Markdown data structure.
 *
 * @param   {string}                input     - The Markdown string to deserialize
 * @param   {DeserializeOptions}    [options] - Options for the deserialization
 * @returns {Promise<MarkdownData>}           - A promise that resolves to the deserialized Markdown data
 */
export const deserialize = async (
	input: string,
	options?: DeserializeOptions,
): Promise<MarkdownData> => {

	return await getDeserializeProcessor( options ).parse( input )

}

/**
 * Serialize a Markdown data structure into a Markdown string.
 *
 * @template I - The type of the Markdown data to serialize
 * @param   {I}                input     - The Markdown data to serialize
 * @param   {SerializeOptions} [options] - Options for the serialization
 * @returns {Promise<string>}            - A promise that resolves to the serialized Markdown string
 */

export const serialize = async <I extends MarkdownData>(
	input: I,
	options?: SerializeOptions,
): Promise<string> => {

	return await getSerializeProcessor( options ).stringify( input )

}

/**
 * Convert Markdown to HTML.
 *
 * @param   {string}                    input     - Markdown string
 * @param   {ToHTMLFromMarkdownOptions} [options] - Options for the conversion
 * @returns {Promise<string>}                     Promise that resolves to the HTML string
 */
export const toHTML = async (
	input: string,
	options?: ToHTMLFromMarkdownOptions,
): Promise<string> => {

	const file = await unified()
		.use( remarkParse )
		.use( remarkRehype, options?.to )
		.use( rehypeDocument, options?.document )
		.use( rehypeFormat, options?.format )
		.use( rehypeStringify, options?.stringify )
		.process( input )

	return String( file )

}

/**
 * Convert HTML to Markdown.
 *
 * @param   {string}                    input     - HTML string
 * @param   {FromHTMLToMarkdownOptions} [options] - Options for the conversion
 * @returns {Promise<string>}                     Promise that resolves to the Markdown string
 */
export const fromHTML = async (
	input: string,
	options?: FromHTMLToMarkdownOptions,
): Promise<string> => {

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
