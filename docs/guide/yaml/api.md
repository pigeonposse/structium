# `@structium/yaml` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(content: string, options?: LoadOptions): Promise<Res>
```

Deserialize a YAML string into an object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the deserialized object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The YAML content string |
| `options`? | `LoadOptions` | Options |

#### Returns

`Promise`\<`Res`\>

- The deserialized JavaScript object

#### Throws

If the input string is not valid YAML

#### Example

```ts
import { deserialize } from "@structium/yaml"

const yamlContent = `
  name: Alice
  age: 30
  city: New York
`

const obj = await deserialize( yamlContent )
console.log( obj )
```

***

### serialize()

```ts
function serialize(content: object, options?: DumpOptions): Promise<string>
```

Serializes an object into a YAML string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `object` | The object to serialize. |
| `options`? | `DumpOptions` | Options |

#### Returns

`Promise`\<`string`\>

A promise that resolves to the YAML string representation of the object.
