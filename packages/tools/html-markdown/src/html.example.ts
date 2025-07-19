import {
	fromMarkdown,
	toMarkdown,
	deserialize,
	serialize,
} from './html'

const run = async () => {

	const markdownInput = `# Hola Mundo

Esto es **Markdown** con una lista:

- Uno
- Dos
- Tres
`
	const htmlInput = `<h1>Hola Mundo</h1><p>Esto es <strong>HTML</strong> puro.</p>`

	// 1. Markdown → HTML
	const htmlFromMd = await fromMarkdown( markdownInput, { document : {
		title : 'Documento de prueba',
		css   : 'body { font-family: sans-serif; }',
	} } )
	console.log( '\n🧾 fromMarkdown:\n', htmlFromMd )

	// 2. HTML → Markdown
	const markdownFromHtml = await toMarkdown( htmlInput, { stringify : {
		bullet   : '*',
		fence    : '`',
		emphasis : '*',
	} } )
	console.log( '\n📄 toMarkdown:\n', markdownFromHtml )

	// 3. HTML → AST
	const ast = await deserialize( htmlInput, { parse: { fragment: true } } )
	console.log( '\n🧠 deserialize (AST):\n', JSON.stringify( ast, null, 2 ) )

	// 4. AST → HTML
	const htmlFromAst = await serialize( ast )
	console.log( '\n🧪 serialize (from AST):\n', htmlFromAst )

}

run().catch( console.error )
