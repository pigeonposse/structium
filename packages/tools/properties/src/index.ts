import {
	parse, stringify,
// @ts-ignore
} from 'properties'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any
// @ts-ignore
import { type CommonObj } from '../../_shared'

type DeserializeOptions = {

	/**
	 * Defines characters to be treated as comments.
	 * Each token must be a single printable ASCII character.
	 *
	 * @default ["#", "!"]
	 */
	comments? : string[]

	/**
	 * Defines characters to act as data separators.
	 * Each token must be a single printable ASCII character.
	 *
	 * @default ["=", ":"]
	 */
	separators? : string[]

	/**
	 * Parses INI sections. Read the INI section for further details.
	 *
	 * @default true
	 */
	sections?   : boolean
	/**
	 * Parses dot separated keys as JavaScript objects.
	 * Look at the namespaces section for further details.
	 *
	 * @default true
	 */
	namespaces? : boolean

	/**
	 * Allows you to read the value of a key while the file is being parsed.
	 *
	 * @default false
	 */
	variables? : boolean
	/**
	 * External variables can be passed to the file if the variables option is enabled.
	 *
	 * @default false
	 */
	vars?      : boolean

	/**
	 * This option can be used with the comments and separators options.
	 * If true, only the tokens specified in these options are used to parse comments and separators.
	 */
	// strict? : boolean
	/**
	 * If true, enables the inclusion of other files or sources.
	 * Note: A callback must be provided when this is enabled.
	 */
	// include? : boolean
	/**
	 * If true, indicates that 'data' is a file path.
	 * Note: A callback must be provided for asynchronous reading.
	 */
	// path? : boolean
}

/**
 * Deserialize a properties string into an object.
 *
 * @template                Res       - The expected return type of the deserialized object
 * @param    {string}       content   - The properties content string
 * @param    {object}       [options] - Options
 * @returns  {Promise<Res>}           - The deserialized JavaScript object
 * @throws {Error} If the input string is not valid properties string
 */
export const deserialize = async <Res extends CommonObj = CommonObj>( content: string, options: DeserializeOptions = {} ) => {

	// @ts-ignore
	options.strict = true
	if ( options.sections === undefined ) options.sections = true
	if ( options.namespaces === undefined ) options.namespaces = true
	if ( !options.separators ) options.separators = [ '=', ':' ]
	if ( !options.comments ) options.comments = [ '#', '!' ]

	return parse( content, options ) as Res

}

type SerializeOptions = {
	/**
	 * The character to be used for comments.
	 * Must be a single printable ASCII character.
	 *
	 * @default '#'
	 */
	comment? : string

	/**
	 * The character to be used as a data separator.
	 * Must be a single printable ASCII character.
	 *
	 * @default '='
	 */
	separator? : string

	/**
	 * If provided, the resulting data will be written to this file path.
	 * Note: A callback must be provided when this option is used.
	 */
	//path? : string
}

const flatten = ( obj: Any, prefix = '' ) => {

	return Object.keys( obj ).reduce( ( acc, k ) => {

		const pre = prefix.length ? prefix + '.' : ''
		if ( typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray( obj[k] ) )
			Object.assign( acc, flatten( obj[k], pre + k ) )
		else acc[pre + k] = obj[k]
		return acc

	}, {} as Record<string, Any> )

}

/**
 * Serializes an object into a properties string.
 *
 * @param   {object}          content   - The object to serialize.
 * @param   {object}          [options] - Options
 * @returns {Promise<string>}           A promise that resolves to the properties string representation of the object.
 */

export const serialize = async <Content extends CommonObj = CommonObj>( content: Content, options?: SerializeOptions ) =>
	await stringify( flatten( content ), options )

