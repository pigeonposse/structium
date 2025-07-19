
/** @type {import('./src/index').Config} */
export default { plugins : { custom : {
	serialize   : async input => JSON.stringify( input ),
	deserialize : async input => JSON.parse( input ),
} } }
