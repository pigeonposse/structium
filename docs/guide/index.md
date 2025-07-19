# What is it `structium`?

![BANNER](https://github.com/pigeonposse/structium/blob/main/docs/public/banner.png?raw=true)

`structium` is a JavaScript Library for Serialize and deserialize any data structure in any environment _(browser, node, bun, deno, etc)_.

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

## Included tools

Structium includes the following tools:

- [See all tools](https://github.com/pigeonposse/structium/tree/main/packages/tools)

> Do you want to add a new tool? [Contribute](https://github.com/pigeonposse/structium/issues)

## Why `structium`?

The main idea of _Structium_ is to unify all file serialization and deserialization tools into a single ecosystem, compatible with any development environment. Each _Structium_ library will focus exclusively on these two functions: serialization and deserialization, without adding additional features. The goal is to maximize cost, size, and performance.

Therefore, if you're looking for functionality outside of this focus, _Structium_ won't be the right solution.

The intention is for developers to find _Structium_ a reliable, lightweight, and well-maintained source for serialization and deserialization tools.

## More information

- [Library](core/index.md)
- [Tools](https://github.com/pigeonposse/structium/tree/main/packages/tools)
- [All in one tools](aio/index.md)
