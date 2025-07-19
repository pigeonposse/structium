# structium

`structium` is a JavaScript Library for Serialize and deserialize any data structure in any environment (browser, node, etc).

## 🔑 Installation

::: code-group

```bash [npm]
npm install structium
```

```bash [pnpm]
pnpm install structium
```

```bash [yarn]
yarn add structium
```

```bash [bun]
bun add structium
```

```bash [deno]
deno add structium
```

:::


## Usage 

### Libary usage

```js
import { markdown } from 'structium'

const data = markdown.deserialize(`
# Example Markdown

This is an example Markdown document.
[Read more](https://structium.pigeonposse.com)`
)

console.log(data)

```

### CLI usage

```bash
npx structium yaml deserialize -i https://example.com/data.yaml -o data.json
```

## More

- [Library](core/index.md)
- [tools](https://github.com/pigeonposse/structium/tree/main/packages/tools)
- [All in one tools](aio/index.md)

## ➕ More

- 📖 [API Docs](api.md)
- 📦 [NPM](https://www.npmjs.com/package/structium)
