import { defineData } from 'clippium'

import {
	name,
	version,
	description,
} from '../package.json'

export const CONFIG_FILE_EXT = [
	'js',
	'mjs',
	'cjs',
] as const

export const CONFIG_FILES = CONFIG_FILE_EXT.map( ext => `./${name}.config.${ext}` as const )

export const data = defineData( {
	name,
	version,
	desc  : description,
	flags : {
		help : {
			alias : [ 'h' ],
			type  : 'boolean',
			desc  : 'Show help',
		},
		version : {
			alias : [ 'v' ],
			type  : 'boolean',
			desc  : 'Show version',
		},
		config : {
			alias : [ 'c' ],
			type  : 'string',
			desc  : `Config file path. Auto detect if not set (./${name}.config.{${CONFIG_FILE_EXT.join( ',' )}})`,
		},
	},
} )

const flagsData = defineData( {
	flags : {
		input : {
			alias : [ 'i' ],
			type  : 'string',
			desc  : 'Input data (path/url/content)',
		},
		output : {
			alias : [ 'o' ],
			type  : 'string',
			desc  : 'Output file path',
		},
	},
} )

const deDesc = 'Deserialize/Parse a string into an object'
const seDesc = 'Serialize/Stringify an object into a string'

export const comandData = defineData( {
	commands : {
		deserialize : {
			desc : deDesc,
			...flagsData,
		},
		parse : {
			desc : deDesc,
			...flagsData,
		},
		serialize : {
			desc : seDesc,
			...flagsData,
		},
		stringify : {
			desc : seDesc,
			...flagsData,
		},
	},
} )

export {
	name,
	version,
	description,
}
