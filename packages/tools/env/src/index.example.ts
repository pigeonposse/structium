import * as env from '.'

const DATA = `
NUMBER=2
STRING = "hello"
BOOLEAN = true
`
const obj    = await env.deserialize( DATA )
const string = await env.serialize( obj )

console.log( {
	obj,
	string,
} )
