import * as tools from '@structium/aio'

export const isBrowser = typeof window !== 'undefined'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any
export const joinPath = ( ...paths: string[] ): string => {

	return paths
		.filter( Boolean ) // elimina valores falsy como '', null, undefined
		.map( ( segment, index ) => {

			if ( index === 0 ) {

				// Para el primer segmento, solo quitar barra al final
				return segment.replace( /\/+$/, '' )

			}
			else {

				// Para los demás, quitar barra al inicio y al final
				return segment.replace( /^\/+|\/+$/g, '' )

			}

		} )
		.filter( Boolean )
		.join( '/' )

}

export const getProcess = async (): Promise<typeof import( 'node:process' )> => {

	return await import( 'node:process' )

}

export const getCwd = async (): Promise<string> => {

	const { cwd } = await getProcess( )

	return cwd()

}

export type Input = string | URL

export const getStringType = ( value: string ): 'text' | 'url' | 'path' => {

	if ( isUrl( value ) ) return 'url'
	if ( isPath( value ) ) return 'path'
	return 'text'

}

const isUrl = ( value: string ): boolean => {

	try {

		new URL( value )
		return true

	}
	catch {

		return false

	}

}

export const isPath = ( str: string ): boolean => {

	const pathPattern = /^(\.\/|\.\.\/|\/|[A-Za-z]:[\\/])/

	if ( !pathPattern.test( str ) ) return false

	if ( /\s(?!\\)/.test( str ) && !/\\\s/.test( str ) ) return false

	return true

}

export const read = async ( i: Input ) => {

	const type = i instanceof URL ? 'url' : getStringType( i )

	if ( type === 'text' ) return i as string
	if ( type === 'url' ) return fetch( i ).then( r => r.text() )

	if ( isBrowser ) return fetch( i ).then( r => r.text() )
	return import( 'node:fs/promises' ).then( ( { readFile } ) => readFile( i, 'utf8' ) )

}

export const read2Buffer = async ( i: Input ): Promise<Uint8Array> => {

	const type = i instanceof URL ? 'url' : getStringType( i )

	if ( type === 'text' ) return new TextEncoder().encode( i as string )
	if ( type === 'url' ) return fetch( i ).then( r => r.arrayBuffer() ).then( b => new Uint8Array( b ) )

	if ( isBrowser ) return fetch( i ).then( r => r.arrayBuffer() ).then( b => new Uint8Array( b ) )
	return import( 'node:fs/promises' ).then( ( { readFile } ) => readFile( i ) ) // returns Buffer

}

export const bufferToObject = ( input: Buffer | Uint8Array ): Any => {

	const code = typeof Buffer !== 'undefined' && Buffer.isBuffer( input )
		? input.toString( 'utf8' )
		: new TextDecoder().decode( input )

	// ⚠️ Use only with trusted input
	return eval( `(${code})` )

}

export const writeFile = async ( i: string, content: string | Uint8Array ) => {

	if ( isBrowser ) throw new Error( 'Writing to the filesystem is not supported in the browser' )

	const { writeFile } = await import( 'node:fs/promises' )
	await ensureDir( i )
	return writeFile( i as string, content, 'utf8' )

}

export const ensureDir = async ( path: string ) => {

	if ( isBrowser ) throw new Error( 'ensureDir is not supported in the browser' )

	const {
		mkdir, stat,
	} = await import( 'node:fs/promises' )
	const {
		dirname, extname,
	} = await import( 'node:path' )
	let dir = path

	try {

		const stats = await stat( path )

		if ( stats.isFile() ) dir = dirname( path )

	}
	catch {

		// Si no existe: asumir que es archivo si tiene extensión, si no, es directorio
		if ( extname( path ) ) dir = dirname( path )

	}

	return mkdir( dir, { recursive: true } )

}

export const findAndImport = async <T>( paths: string[] ) => {

	for ( const path of paths ) {

		try {

			const mod = await import( joinPath( await getCwd(), path ) )

			return mod.default as T

		}
		catch {

			// no-op
		}

	}
	return undefined

}

export { tools }

export const writeObject = async ( path: string, data: object | string ) => {

	if ( path.endsWith( '.json' ) ) {

		const content = typeof data === 'string' ? data : JSON.stringify( data )
		await writeFile( path, content )

	}
	else if ( path.endsWith( '.toml' ) || path.endsWith( '.tml' ) ) {

		const content = typeof data === 'object' ? await tools.toml.serialize( data ) : JSON.stringify( data )
		await writeFile( path, content )

	}
	else if ( path.endsWith( '.yaml' ) || path.endsWith( '.yml' ) ) {

		const content = typeof data === 'object' ? await tools.yaml.serialize( data ) : JSON.stringify( data )
		await writeFile( path, content )

	}
	else {

		await writeFile( path, JSON.stringify( data ) )

	}

}

export const getJSON = async ( path: string ) => {

	try {

		const content = await read( path )
		return JSON.parse( content )

	}
	catch ( _e ) {

		throw new Error( `JSON file not found: ${path}` )

	}

}
