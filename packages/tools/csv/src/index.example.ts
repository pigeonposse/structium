import {
	deserialize,
	serialize,
} from '.'

const csvData = `
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
`

const obj = await deserialize( csvData )
console.log( 'Deerialize' )
console.log( obj )
const string = await serialize( obj )
console.log( 'Serialize' )
console.log( string )
