# `@structium/javascript` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(code: string, options?: Options): Promise<Res>
```

Deserialize a JavaScript code string into an ESTree-compatible AST.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `Program` | `Program` | The expected return AST type (default is ESTree.Program) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | JavaScript source code |
| `options`? | `Options` | Acorn parsing options |

#### Returns

`Promise`\<`Res`\>

- Parsed JavaScript AST

#### Example

```ts
const ast = await deserialize('const a = 1')
console.log(ast.body)
```

***

### serialize()

```ts
function serialize(ast: Program, options?: SerializeOptions): Promise<string>
```

Serialize an ESTree-compatible AST back into JavaScript code.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ast` | `Program` | ESTree-compatible Program node |
| `options`? | [`SerializeOptions`](#serializeoptions) | Astring options |

#### Returns

`Promise`\<`string`\>

- Generated JavaScript source code

#### Example

```ts
const code = await serialize(ast)
console.log(code)
```

## Type Aliases

### DeserializeOptions

```ts
type DeserializeOptions: AcornOptions;
```

***

### JSData

```ts
type JSData: Program;
```

***

### SerializeOptions

```ts
type SerializeOptions: AstringOptions;
```
