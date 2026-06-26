import {
	getDirFromURL, Tools,
} from '@structium/repo-config/example'

import type {
	deserialize, serialize,
} from '.'

const tools = new Tools<typeof deserialize, typeof serialize>( { packageDir: getDirFromURL( import.meta.url, '..' ) } )

await tools.run( `
a = 1
[section]
b = c
` )

await tools.run( `
a = 1
# s1
[s$\{a}]
a = b
b = c
# d = c
d = $\{s$\{a}|$\{s$\{a}|a}}
[section]
a.b = 1
a.c.d = 2
b = $\{section|a.b}
`, {
	deserialize : {
		variables : true,
		vars      : false,
	},
	serialize : { },
} )
