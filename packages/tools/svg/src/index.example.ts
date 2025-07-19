import * as svg from '.'

const DATA = `
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
`
const obj    = await svg.deserialize( DATA )
const string = await svg.serialize( obj )

console.log( {
	obj,
	string,
} )
