
import {
	parse,
	type Options as DeserializeOptions,
} from 'csv-parse/browser/esm/sync'
import {
	stringify,
	type Options as SerializeOptions,
} from 'csv-stringify/browser/esm/sync'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any
type CommonCSV = Any[]

export type {
	DeserializeOptions,
	SerializeOptions,
}

/**
 * Deserialize a CSV string into an object.
 *
 * @template                Res       - The expected return type of the deserialized object
 * @param    {string}       input     - The CSV content
 * @param    {object}       [options] - Options to pass to `fast-csv`
 * @returns  {Promise<Res>}           - A promise that resolves to the deserialized object
 */
export const deserialize = async <Res extends string[]>(
	input: string,
	options?: DeserializeOptions<Res>,
) => {

	const data = parse( input, {
		delimiter      : ',',
		skipEmptyLines : true,
		...options,
		columns        : true,
	} )

	return data

}

/**
 * Serialize an object or array of objects into a CSV string.
 *
 * @template                    I         - The type of the object(s) to serialize
 * @param    {I}                input     - The object or array of objects to serialize
 * @param    {SerializeOptions} [options] - Options to pass to `fast-csv`
 * @returns  {Promise<string>}            - A promise that resolves to the CSV string
 */
export const serialize = async <I extends CommonCSV>(
	input: I,
	options?: SerializeOptions,
): Promise<string> => {

	const data = stringify( input, {
		delimiter : ',',
		header    : true,
		...options,
	} )

	return data

}

