import {
	deserialize,
	serialize,
} from '.'

const csvData = `
  .example {
    color: red;
    font-size: 16px;
  }
`

const obj = await deserialize( csvData )
console.log( 'Deerialize' )
console.log( obj )
const string = await serialize( obj )
console.log( 'Serialize' )
console.log( string )
