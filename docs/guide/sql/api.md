# `@structium/sql` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string, options?: Option): Promise<AST>
```

Deserialize a SQL string into a SQL AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | SQL source string |
| `options`? | `Option` | Options |

#### Returns

`Promise`\<[`AST`](#ast)\>

Parsed SQL AST (SQL Root node)

***

### serialize()

```ts
function serialize(input: AST, options?: Option): Promise<string>
```

Serialize a SQL AST back into a SQL string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`AST`](#ast) | SQL Root node |
| `options`? | `Option` | Options |

#### Returns

`Promise`\<`string`\>

SQL string

## Type Aliases

### AST

```ts
type AST: SqlAST | SqlAST[];
```

***

### DeserializeOptions

```ts
type DeserializeOptions: Option;
```

***

### SerializeOptions

```ts
type SerializeOptions: Option;
```
