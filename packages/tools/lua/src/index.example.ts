import { deserialize } from '../dist'

const data = `
function greet(name)
  print("Hello, " .. name)
end

greet("World")
`

const obj = await deserialize( data )

console.log( 'Deerialize' )
console.log( obj )

// const string = await serialize( obj )
// console.log( 'Serialize' )
// console.log( string )
