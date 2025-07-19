import {
	deserialize,
	serialize,
} from '.' // '../dist/index.js'

const encoded = await serialize( {
	name : 'Alice',
	age  : 30,
	data : new Uint8Array( [
		1,
		2,
		3,
	] ),
} )

console.log( encoded )
const decoded = await deserialize( encoded )
console.log( decoded )
