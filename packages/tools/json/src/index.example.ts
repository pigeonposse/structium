import {
	deserialize,
	serialize,
} from '.'
import pkg from '../package.json'

const string = await serialize( pkg )
console.log( 'Serialize' )
console.log( string )
const obj = await deserialize( string )
console.log( 'Deerialize' )
console.log( obj )

