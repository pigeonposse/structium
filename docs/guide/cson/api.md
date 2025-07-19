# `@structium/cson` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: string): Promise<any>
```

Deserialize a CSON string into a CSON (Coffescript) Object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | source string |

#### Returns

`Promise`\<`any`\>

CSON Object

***

### serialize()

```ts
function serialize(input: any): Promise<string>
```

Serialize a CSON (Coffescript) Object back into a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `any` | Input |

#### Returns

`Promise`\<`string`\>

CSS string

## Type Aliases

### CSONData

```ts
type CSONData: any;
```
