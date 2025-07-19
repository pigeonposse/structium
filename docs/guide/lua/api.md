# `@structium/lua` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string, options?: Partial<Options>): Promise<Chunk>
```

Parse a Lua string into an AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | Lua source code |
| `options`? | `Partial`\<`Options`\> | Parser options |

#### Returns

`Promise`\<`Chunk`\>

- Lua AST

***

### serialize()

```ts
function serialize(_input: Chunk, _options?: undefined): Promise<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_input` | `Chunk` |
| `_options`? | `undefined` |

#### Returns

`Promise`\<`string`\>

## Type Aliases

### AST

```ts
type AST: Chunk;
```

***

### DeserializeOptions

```ts
type DeserializeOptions: Partial<Options>;
```

***

### SerializeOptions

```ts
type SerializeOptions: never;
```
