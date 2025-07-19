# `@structium/toml` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(content: string, options?: ParseOptions): Promise<Res>
```

Deserialize a TOML string into a JavaScript object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the deserialized object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The TOML content string |
| `options`? | `ParseOptions` | Options |

#### Returns

`Promise`\<`Res`\>

- The deserialized JavaScript object

#### Example

```ts
const tomlContent = `
  name = "Alice"
  age = 30
  city = "New York"
`

const obj = await deserialize( tomlContent )
console.log( obj )
```

***

### serialize()

```ts
function serialize(content: object, options?: {}): Promise<string>
```

Serialize a JavaScript object to a TOML string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `object` | An object that will be serialized to a TOML string. |
| `options`? | `object` | Options |

#### Returns

`Promise`\<`string`\>

A TOML string.
