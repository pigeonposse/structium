import {
	deserialize,
	serialize,
} from '../dist'

const DATA = `
  query GetUser($id: ID!) {
    user(id: $id) {
      name
    }
  }
`

const obj = await deserialize( DATA )
console.log( 'Deerialize' )
console.log( obj )
const string = await serialize( obj )
console.log( 'Serialize' )
console.log( string )
