import {
	load, dump,
	type DumpOptions,
	type LoadOptions,
} from 'js-yaml'

import { type CommonObj } from '../../_shared'

type DeserializeOptions = LoadOptions

/**
 * Deserialize a YAML string into an object.
 *
 * @template                Res       - The expected return type of the deserialized object
 * @param    {string}       content   - The YAML content string
 * @param    {object}       [options] - Options
 * @returns  {Promise<Res>}           - The deserialized JavaScript object
 * @throws {Error} If the input string is not valid YAML
 * @example import { deserialize } from "@structium/yaml"
 *
 * const yamlContent = `
 *   name: Alice
 *   age: 30
 *   city: New York
 * `
 *
 * const obj = await deserialize( yamlContent )
 * console.log( obj )
 */
export const deserialize = async <Res extends CommonObj = CommonObj>( content: string, options?: DeserializeOptions ) => {

	return load( content, options ) as Res

}

type SerializeOptions = DumpOptions

/**
 * Serializes an object into a YAML string.
 *
 * @param   {object}          content   - The object to serialize.
 * @param   {object}          [options] - Options
 * @returns {Promise<string>}           A promise that resolves to the YAML string representation of the object.
 */

export const serialize = async ( content: object, options?: SerializeOptions ) =>
	await dump( content, options )

