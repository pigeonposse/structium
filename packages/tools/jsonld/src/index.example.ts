import {
	deserialize,
	serialize,
} from '../dist'

const context = {
	name     : 'http://schema.org/name',
	homepage : {
		'@id'   : 'http://schema.org/url',
		'@type' : '@id',
	},
	image : {
		'@id'   : 'http://schema.org/image',
		'@type' : '@id',
	},
}

const data = {
	name     : 'Manu Sporny',
	homepage : 'http://manu.sporny.org/',
	image    : 'http://manu.sporny.org/images/manu.png',
}

const obj = await deserialize( JSON.stringify( {
	context,
	...data,
} ) )

console.log( 'Deerialize' )
console.log( obj )

const string = await serialize( obj, { context } )
console.log( 'Serialize' )
console.log( string )
