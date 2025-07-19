import {
	deserialize,
	serialize,
} from '.' // '../dist/index.js'

const code = `
const x = 42
function greet(name) {
  return \`Hello, \${name}!\`
}
`

const ast = await deserialize( code )

console.log( '🧠 AST:', ast.body )

const generated = await serialize( ast )
console.log( '🔄 Reconstructed code:\n', generated )
