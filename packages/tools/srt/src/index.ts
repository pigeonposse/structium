import srtParser2 from 'srt-parser-2'

const parser = new srtParser2()
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type NoOption = {}
type SrtObject = {
	id           : string
	startTime    : string
	startSeconds : number
	endTime      : string
	endSeconds   : number
	text         : string
}
type DeserializeOptions = NoOption

/**
 * Deserialize a SRT string into an object.
 *
 * @template                Res        - The expected return type of the deserialized object
 * @param    {string}       content    - The SRT content string
 * @param    {object}       [_options] - Options
 * @returns  {Promise<Res>}            - The deserialized JavaScript object
 * @throws {Error} If the input string is not valid SRT string
 * @example import { deserialize } from "@structium/srt"
 *
 * const content = `
 * 1
 * 00:00:11,544 --> 00:00:12,682
 * Hello
 * `
 *
 * const obj = await deserialize( content )
 * console.log( obj )
 */
export const deserialize = async <Res extends SrtObject[] = SrtObject[]>( content: string, _options?: DeserializeOptions ) => {

	return parser.fromSrt( content ) as Res

}

type SerializeOptions = NoOption

/**
 * Serializes an object into a SRT string.
 *
 * @param   {object}          content   - The object to serialize.
 * @param   {object}          [options] - Options
 * @returns {Promise<string>}           A promise that resolves to the SRT string representation of the object.
 */

export const serialize = async ( content: SrtObject[], _options?: SerializeOptions ) =>
	await parser.toSrt( content )

