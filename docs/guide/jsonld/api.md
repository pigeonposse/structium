# `@structium/jsonld` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string, options?: Expand): Promise<JsonLdArray>
```

Deserialize a JSON-LD string into an expanded AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | JSON-LD source string |
| `options`? | `Expand` | Options for expansion |

#### Returns

`Promise`\<`JsonLdArray`\>

- Expanded JSON-LD (AST)

***

### serialize()

```ts
function serialize(input: JsonLdArray, options?: Compact & {
  context: ContextDefinition;
}): Promise<string>
```

Serialize a JSON-LD AST back into a compact JSON-LD string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `JsonLdArray` | Expanded JSON-LD |
| `options`? | `Compact` & \{ `context`: `ContextDefinition`; \} | Options for compacting |

#### Returns

`Promise`\<`string`\>

- Compact JSON-LD string

## Type Aliases

### AST

```ts
type AST: Awaited<ReturnType<typeof expand>>;
```

***

### DeserializeOptions

```ts
type DeserializeOptions: Parameters<typeof expand>[1];
```

***

### SerializeOptions

```ts
type SerializeOptions: Parameters<typeof compact>[2] & {
  context: Parameters<typeof compact>[1];
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `context`? | `Parameters`\<*typeof* `compact`\>\[`1`\] |
