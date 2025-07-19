
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any
type CommonJSON = Any

/**
 * Deserialize a JSON string into an object or array.
 *
 * @template Res - The expected return type of the deserialized object/array
 * @param   {string} input - The JSON content string
 * @returns {Res}          - The deserialized JavaScript object or array
 * @throws {SyntaxError}               - If the input string is not valid JSON
 */
export const deserialize = async <Res extends CommonJSON>(
	input: string,
): Promise<Res> => {

	return JSON.parse( input ) as Res

}
export type DeserializeOptions = {
	/** Replacer function */
	replacer? : ( key: string, value: Any ) => Any
	/**
	 * @default 2
	 */
	space?    : number | string
}

/**
 * Serialize an object or array into a JSON string.
 *
 * @template I - The type of the object or array to serialize
 * @param   {I}                  input   - The object or array to serialize
 * @param   {DeserializeOptions} options - Options to pass to `JSON.stringify`
 * @returns {string}                     - The serialized JSON string
 */
export const serialize = async <I extends CommonJSON>(
	input: I,
	options?: DeserializeOptions,
): Promise<string> => {

	return JSON.stringify( input, options?.replacer, options?.space )

}

