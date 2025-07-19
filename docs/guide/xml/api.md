# `@structium/xml` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(input: string, options?: DeserializeOptions): Promise<Res>
```

Parses an XML content string into a JavaScript object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the parsed object. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The XML content string to be parsed. |
| `options`? | `DeserializeOptions` | Options to pass to the XML parser. |

#### Returns

`Promise`\<`Res`\>

- A promise that resolves to the parsed XML as an object.

#### Throws

If there is an error parsing the XML content.

***

### serialize()

```ts
function serialize<I>(input: I): Promise<string>
```

Converts a JavaScript object into an XML string.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `I` *extends* `CommonObj` | `CommonObj` | The type of the object to be converted. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `I` | The object to be converted. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the XML string.
