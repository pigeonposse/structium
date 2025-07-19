type EnvData = Record<string, string | number | boolean>

const convertStringToNumber = ( input: string ) => {

	const number = Number( input )
	return isNaN( number ) ? input : number

}
// fork from: https://www.npmjs.com/package/dotenv?activeTab=code
const parse = ( src: string ) => {

	const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg
	const obj  = {}

	let match, lines = src.toString()

	lines = lines.replace( /\r\n?/mg, '\n' )

	while ( ( match = LINE.exec( lines ) ) != null ) {

		const key = match[1]
		let value = ( match[2] || '' )

		value = value.trim()

		const maybeQuote = value[0]

		value = value.replace( /^(['"`])([\s\S]*)\1$/mg, '$2' )

		if ( maybeQuote === '"' ) {

			value = value.replace( /\\n/g, '\n' )
			value = value.replace( /\\r/g, '\r' )

		}

		// @ts-ignore
		obj[key] = convertStringToNumber( value )

	}

	return obj

}

/**
 * Deserialize an environment variable file content string into an object.
 *
 * @template Res - The expected return type of the deserialized object
 * @param   {string}       input   - The environment variable file content
 * @param   {string}       content - The environment variable file content string
 * @returns {Promise<Res>}         - A promise that resolves to the deserialized object
 * @throws {Error} If the input string is not valid
 * @example
 *
 * const envContent = `
 *   NAME=Alice
 *   AGE=30
 *   CITY=New York
 *   COSTUMER=true
 * `
 *
 * const obj = await deserialize( envContent )
 * console.log( obj )
 */
export const deserialize = async <Res extends EnvData>( input: string ): Promise<Res> => {

	try {

		return parse( input ) as Res

	}
	catch ( error ) {

		// @ts-ignore
		throw new Error( `Error parsing env content: ${error.message}` )

	}

}

/**
 * Serialize an object into an environment variable file content string.
 *
 * @template I - The type of the object to serialize
 * @param   {I}               input - The object containing environment variables
 * @returns {Promise<string>}       - A promise that resolves to the serialized .env string
 * @example
 *
 * const obj = {
 * NAME: 'Bob',
 * AGE: 25,
 * APP_URL: 'http://localhost:3000',
 * MESSAGE: 'Hello, World!\nThis is a multiline message.',
 * DEBUG_MODE: true // Los booleanos se convertirán a 'true' o 'false'
 * }
 *
 * const envString = await serialize( obj )
 * console.log( envString )
 */
export const serialize = async <I extends EnvData>( input: I ): Promise<string> => {

	return new Promise( resolve => {

		const lines: string[] = []

		for ( const key in input ) {

			if ( Object.prototype.hasOwnProperty.call( input, key ) ) {

				const value = input[key]
				let formattedValue: string

				if ( typeof value === 'boolean' ) {

					formattedValue = value.toString()

				}
				else if ( typeof value === 'number' ) {

					formattedValue = value.toString()

				}
				else if ( typeof value === 'string' ) {

					if ( value.includes( ' ' ) || value.includes( '\n' ) || value.includes( '\r' ) || value.includes( '#' ) || value.includes( '"' ) || value.includes( '\'' ) ) {

						formattedValue = JSON.stringify( value ) // Esto escapa automáticamente " y \n, etc.

					}
					else {

						formattedValue = value

					}

				}
				else {

					formattedValue = String( value )

				}

				lines.push( `${key}=${formattedValue}` )

			}

		}

		resolve( lines.join( '\n' ) )

	} )

}
