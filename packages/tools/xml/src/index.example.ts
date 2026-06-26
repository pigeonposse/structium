import {
	getDirFromURL, Tools,
} from '@structium/repo-config/example'

import type {
	deserialize, serialize,
} from '.'

const tools = new Tools<typeof deserialize, typeof serialize>( { packageDir: getDirFromURL( import.meta.url, '..' ) } )

await tools.run( `
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
	<age>3</age>
</note>
` )

await tools.runError( `
<note
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
	<age>3</age>
	<boolean>false</boolean>
</note>
` )

