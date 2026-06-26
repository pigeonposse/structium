import {
	getDirFromURL, Tools,
} from '@structium/repo-config/example'

import type {
	deserialize, serialize,
} from '.'

const tools              = new Tools<typeof deserialize, typeof serialize>( { packageDir: getDirFromURL( import.meta.url, '..' ) } )
const { serialize: ser } = await tools.get()
const encoded            = await ser( {
	name : 'Alice',
	age  : 30,
	data : new Uint8Array( [
		1,
		2,
		3,
	] ),
} )
console.log( encoded )

// await tools.run( `World-Schema DEFINITIONS AUTOMATIC TAGS ::= BEGIN
// /* title : Rocket */
// Root ::= SEQUENCE {
//     name UTF8String(SIZE(1..16)),
//     message UTF8String DEFAULT "Hello World",
//     fuel ENUMERATED {
//         solid,
//         liquid,
//         gas
//     },
//     speed CHOICE {
//         kmph INTEGER,
//         mph INTEGER
//     } OPTIONAL,
//     payload SEQUENCE OF UTF8String
// }
// END
// ` )

