# What is it `structium`?

![BANNER](https://github.com/pigeonposse/structium/blob/main/docs/public/banner.png?raw=true)

`structium` is a JavaScript Library for Serialize and deserialize any data structure in any environment (browser, node, etc).

[Read more](https://www.npmjs.com/package/structium)

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

### Individual usage

```js
import { deserialize } from '@structium/toml'

const data = deserialize(`
name = "Alice"
age = 30
city = "New York"

[address]
street = "123 Main St"
zip = "10001"

hobbies = ["reading", "hiking", "painting"]
`)
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
