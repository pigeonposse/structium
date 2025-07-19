# `@structium/plist` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string): Promise<Value>
```

Deserialize a string into a Plist AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | CSS source string |

#### Returns

`Promise`\<`Value`\>

Parsed CSS AST (Plist Root node)

***

### serialize()

```ts
function serialize(input: Value, options?: SerializeOptions): Promise<string>
```

Serialize a Plist AST back into a CSS string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `Value` | Plist node |
| `options`? | [`SerializeOptions`](#serializeoptions) | Options |

#### Returns

`Promise`\<`string`\>

CSS string

## Type Aliases

### AST

```ts
type AST: ReturnType<typeof parse>;
```

***

### SerializeOptions

```ts
type SerializeOptions: {
  format: keyof typeof FORMAT;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `format`? | keyof *typeof* `FORMAT` |
