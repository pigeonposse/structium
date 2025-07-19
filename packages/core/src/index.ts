import color         from '@clippium/color'
import { formatter } from '@clippium/preset-colored'
import pluginConfig  from '@clippium/preset-config'
import {
	Clippium,
	ClippiumData,
} from 'clippium'

import {
	comandData,
	CONFIG_FILES,
	data,
	name,
} from './data'
import {
	findAndImport,
	read,
	writeObject as write,
	tools,
	type Any,
	getJSON,
} from './utils'

export { tools }

export type Plugin = {
	serialize   : ( input: Any ) => Promise<string>
	deserialize : ( input: string ) => Promise<Any>
}
export type Config = { plugins?: Record<string, Plugin> }

/**
 * Define a configuration for `structium`.
 *
 * @param   {object} config - The configuration.
 * @returns {object}        The configuration.
 */
export const defineConfig = ( config: Config ): Config =>
	config

const getCommandConfig = pluginConfig( {
	configNames : [ name + '.commands' ],
	supported   : [
		'javascript',
		'toml',
		'yaml',
		'json',
		'package',
	],
} )

const desc       = color.white.dim
const errorStyle = color.redBright

type ClippiumDataWithPlugins = typeof data & { commands: { [ commandName: string | keyof typeof tools ]: typeof comandData & { desc: string } } }

const cli = new Clippium<ClippiumDataWithPlugins>( data as ClippiumDataWithPlugins, {
	help : { formatter : formatter( {
		title         : color.cyan.inverse.bold,
		bin           : color.cyan,
		version       : color.cyan.dim.italic,
		name          : color.bold,
		positionals   : color.green.dim,
		commands      : color.green,
		flags         : color.yellow,
		desc,
		examples      : color.cyan,
		sectionTitle  : color.white.bold.underline,
		sectionDesc   : desc,
		sectionsProps : desc.italic,
	} ) },
	error : { on: ( { error } ) => console.error( errorStyle( error.message ) ) },
} )

const getConfig = async ( path?: string ) => {

	try {

		return await findAndImport<Config>( path ? [ path ] : CONFIG_FILES )

	}
	catch ( _e ) {

		throw new Error( `Config file not found: ${path}` )

	}

}

cli.fn = async data => {

	const { value }      = await getCommandConfig( data )
	const config         = await getConfig( value.flags.config )
	const plugins        = ( config?.plugins
		? {
			...tools,
			...config.plugins,
		}
		: tools
	) as unknown as Record<string, Plugin>
	const pluginCommands =  Object.fromEntries(
		Object.entries( plugins ).map( ( [ k, _ ] ) => [
			k,
			{
				desc : 'Parse and stringify ' + k + ' files',
				...comandData,
			},
		] ),
	)
	cli.data             = {
		...cli.data,
		// @ts-ignore
		commands : pluginCommands,
	} satisfies ClippiumData

	const parsed = cli.parse( data.utils.argv )
	const {
		flags, commands,
	} = cli.validate( {
		...data,
		...parsed,
	} )

	if ( flags.help ) return console.log( cli.getHelp( data.utils.argv ) )
	else if ( flags.version ) return console.log( data.utils.getVersion() )

	const cmdKey = Object.keys( commands )[0] as string
	if ( !cmdKey ) return console.log( cli.getHelp( data.utils.argv ) )

	const plugin = plugins[cmdKey]
	if ( !plugin ) throw new Error( `Plugin not found: ${cmdKey}` )

	// @ts-ignore
	const serialize = commands.serialize || commands.stringify as boolean
	// @ts-ignore
	const deserialize = commands.deserialize || commands.parse as boolean

	if ( !serialize && !deserialize ) return console.log( cli.getHelp( data.utils.argv ) )

	const input  = flags.input
	const output = flags.output
	if ( !input ) throw new Error( 'Input file not found. Use --input,-i to specify the input file' )

	if ( serialize ) {

		const content = await getJSON( input )

		const data = await plugin.serialize( content )
		if ( output ) await write( output, data )
		else console.log( data )

	}
	else if ( deserialize ) {

		const content = await read( input )
		const data    = await plugin.deserialize( content )

		if ( output ) await write( output, data )
		else console.dir( data, { depth: null } )

	}
	else return console.log( cli.getHelp( data.utils.argv ) )

}
export default cli
