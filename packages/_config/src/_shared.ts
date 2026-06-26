import {
	resolve, dirname, join,
} from 'node:path'
import { fileURLToPath } from 'node:url'

export {
	resolve,
	join,
}
export const getDirFromURL = ( fileURL: string, ...segments: string[] ) => {

	const __filename = fileURLToPath( fileURL )
	const __dirname  = dirname( __filename )
	return segments.length > 0 ? join( __dirname, ...segments ) : __dirname

}

export const IS_TEST = process.env.NODE_ENV === 'test' || !!process.env.VITEST
