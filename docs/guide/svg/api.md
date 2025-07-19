# `@structium/svg` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string, options?: IParseOptions): Promise<INode>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `options`? | `IParseOptions` |

#### Returns

`Promise`\<`INode`\>

***

### serialize()

```ts
function serialize(ast: INode, options?: IStringifyOptions): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ast` | `INode` |
| `options`? | `IStringifyOptions` |

#### Returns

`string`

## Type Aliases

### DeserializeOptions

```ts
type DeserializeOptions: Parameters<typeof parse>[1];
```

***

### SerializeOptions

```ts
type SerializeOptions: Parameters<typeof stringify>[1];
```
