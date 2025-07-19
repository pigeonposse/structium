# `@structium/json` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(input: string): Promise<Res>
```

Deserialize a JSON string into an object or array.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Res` *extends* `unknown` | The expected return type of the deserialized object/array |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The JSON content string |

#### Returns

`Promise`\<`Res`\>

- The deserialized JavaScript object or array

#### Throws

- If the input string is not valid JSON

***

### serialize()

```ts
function serialize<I>(input: I, options?: DeserializeOptions): Promise<string>
```

Serialize an object or array into a JSON string.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `I` *extends* `unknown` | The type of the object or array to serialize |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `I` | The object or array to serialize |
| `options`? | [`DeserializeOptions`](#deserializeoptions) | Options to pass to `JSON.stringify` |

#### Returns

`Promise`\<`string`\>

- The serialized JSON string

## Type Aliases

### DeserializeOptions

```ts
type DeserializeOptions: {
  replacer: (key: string, value: Any) => Any;
  space: number | string;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `replacer`? | (`key`: `string`, `value`: `Any`) => `Any` | Replacer function |
| `space`? | `number` \| `string` | **Default** `2` |
