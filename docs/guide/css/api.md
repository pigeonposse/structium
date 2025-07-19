# `@structium/css` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string): Promise<Root_>
```

Deserialize a CSS string into a PostCSS AST.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | CSS source string |

#### Returns

`Promise`\<`Root_`\>

Parsed CSS AST (PostCSS Root node)

***

### serialize()

```ts
function serialize(input: Root_): Promise<string>
```

Serialize a PostCSS AST back into a CSS string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `Root_` | PostCSS Root node |

#### Returns

`Promise`\<`string`\>

CSS string

## Type Aliases

### CSSAST

```ts
type CSSAST: Root;
```
