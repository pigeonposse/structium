import {
	parse,
	stringify,
} from 'smol-toml'

import { type CommonObj } from '../../_shared'

type DeserializeOptions = Parameters<typeof parse>[1]

/**
 * Deserialize a TOML string into a JavaScript object.
 *
 * @template Res - The expected return type of the deserialized object
 * @param   {string}       content   - The TOML content string
 * @param   {object}       [options] - Options
 * @returns {Promise<Res>}           - The deserialized JavaScript object
 * @example
 *
 * const tomlContent = `
 *   name = "Alice"
 *   age = 30
 *   city = "New York"
 * `
 *
 * const obj = await deserialize( tomlContent )
 * console.log( obj )
 */
export const deserialize = async <Res extends CommonObj = CommonObj>( content: string, options?: DeserializeOptions ) => {

	return parse( content, options ) as Res

}

type SerializeOptions = Parameters<typeof stringify>[1]

/**
 * Serialize a JavaScript object to a TOML string.
 *
 * @param   {object}          content   - An object that will be serialized to a TOML string.
 * @param   {object}          [options] - Options
 * @returns {Promise<string>}           A TOML string.
 */
export const serialize = async ( content: object, options?: SerializeOptions ) =>
	await stringify( content, options )

