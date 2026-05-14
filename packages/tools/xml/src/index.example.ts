import * as xml from '.'

const DATA = `
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
	<age>3</age>
</note>
`
const DATA_ERROR = `
<note
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
	<age>3</age>
	<boolean>false</boolean>
</note>
`
const obj      = await xml.deserialize( DATA )
const string   = await xml.serialize( obj )
const objError = await ( async () => {

	try {

		await xml.deserialize( DATA_ERROR )

	}
	catch ( e ) {

		return e instanceof Error ? e.message : undefined

	}

} )()
if ( !objError ) throw new Error( 'objError must return a Error' )

console.log( {
	obj,
	objError,
	string,
} )
