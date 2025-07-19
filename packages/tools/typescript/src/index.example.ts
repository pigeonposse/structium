import {
	deserialize,
	serialize,
} from '.' // '../dist/index.js'

const code = `
const x: number = 42
function greet(name: string): string {
  return \`Hello, \${name}!\`
}
`

const ast = await deserialize( code )

console.log( '🧠 AST:', ast.body )

const generated = await serialize( ast )
console.log( '🔄 Reconstructed code:\n', generated )
