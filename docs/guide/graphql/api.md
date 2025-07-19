# `@structium/graphql` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string, options?: ParseOptions): Promise<DocumentNode>
```

Deserialize a GraphQL string into a GraphQL AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | GraphQL source string |
| `options`? | `ParseOptions` | Optional parsing options |

#### Returns

`Promise`\<`DocumentNode`\>

- GraphQL AST (DocumentNode)

***

### serialize()

```ts
function serialize(input: DocumentNode): Promise<string>
```

Serialize a GraphQL AST back into a GraphQL string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `DocumentNode` | GraphQL AST (DocumentNode) |

#### Returns

`Promise`\<`string`\>

- GraphQL string

## Type Aliases

### AST

```ts
type AST: DocumentNode;
```

***

### DeserializeOptions

```ts
type DeserializeOptions: ParseOptions;
```

***

### SerializeOptions

```ts
type SerializeOptions: undefined;
```
