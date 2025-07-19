# `@structium/typescript` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(code: string, options?: DeserializeOptions): Promise<Res>
```

Deserialize a Typescript code string into an ESTree-compatible AST.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `Program` | `Program` | The expected return AST type (default is ESTree.Program) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `string` | Typescript source code |
| `options`? | [`DeserializeOptions`](#deserializeoptions) | Acorn parsing options |

#### Returns

`Promise`\<`Res`\>

- Parsed Typescript AST

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

Serialize an ESTree-compatible AST back into Typescript code.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ast` | `Program` | ESTree-compatible Program node |
| `options`? | [`SerializeOptions`](#serializeoptions) | Astring options |

#### Returns

`Promise`\<`string`\>

- Generated Typescript source code

#### Example

```ts
const code = await serialize(ast)
console.log(code)
```

## Type Aliases

### DeserializeOptions

```ts
type DeserializeOptions: AcornOptions & {
  ts: Parameters<typeof tsPlugin>[0];
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `ts` | `Parameters`\<*typeof* `tsPlugin`\>\[`0`\] |

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
