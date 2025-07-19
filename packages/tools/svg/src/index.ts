import {
	parse,
	stringify,
} from 'svgson'

export type * as Svg from 'svgson'

export type DeserializeOptions = Parameters<typeof parse>[1]

export const deserialize = parse

export type SerializeOptions = Parameters<typeof stringify>[1]

export const serialize = stringify

