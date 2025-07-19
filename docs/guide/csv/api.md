# `@structium/csv` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(input: string, options?: Options<Res>): Promise<Res[]>
```

Deserialize a CSV string into an object.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `Res` *extends* `string`[] | The expected return type of the deserialized object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The CSV content |
| `options`? | `Options`\<`Res`\> | Options to pass to `fast-csv` |

#### Returns

`Promise`\<`Res`[]\>

- A promise that resolves to the deserialized object

***

### serialize()

```ts
function serialize<I>(input: I, options?: Options): Promise<string>
```

Serialize an object or array of objects into a CSV string.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `I` *extends* `CommonCSV` | The type of the object(s) to serialize |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `I` | The object or array of objects to serialize |
| `options`? | `Options` | Options to pass to `fast-csv` |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the CSV string
