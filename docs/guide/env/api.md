# `@structium/env` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(input: string): Promise<Res>
```

Deserialize an environment variable file content string into an object.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Res` *extends* `EnvData` | The expected return type of the deserialized object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The environment variable file content |

#### Returns

`Promise`\<`Res`\>

- A promise that resolves to the deserialized object

#### Throws

If the input string is not valid

#### Example

```ts
const envContent = `
  NAME=Alice
  AGE=30
  CITY=New York
  COSTUMER=true
`

const obj = await deserialize( envContent )
console.log( obj )
```

***

### serialize()

```ts
function serialize<I>(input: I): Promise<string>
```

Serialize an object into an environment variable file content string.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `I` *extends* `EnvData` | The type of the object to serialize |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `I` | The object containing environment variables |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the serialized .env string

#### Example

```ts
const obj = {
NAME: 'Bob',
AGE: 25,
APP_URL: 'http://localhost:3000',
MESSAGE: 'Hello, World!\nThis is a multiline message.',
DEBUG_MODE: true // Los booleanos se convertirán a 'true' o 'false'
}

const envString = await serialize( obj )
console.log( envString )
```
