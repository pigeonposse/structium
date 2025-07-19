# `@structium/ini` - API documentation

## Functions

### deserialize()

```ts
function deserialize<Res>(input: string, options?: DecodeOptions): Promise<Res>
```

Deserialize an INI string into a JavaScript object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Res` *extends* `CommonObj` | `CommonObj` | The expected return type of the deserialized object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The INI content string |
| `options`? | `DecodeOptions` | Options |

#### Returns

`Promise`\<`Res`\>

- The deserialized JavaScript object

#### Throws

- If the content is detected as HTML

***

### serialize()

```ts
function serialize<I>(input: I, options?: EncodeOptions): Promise<string>
```

Serialize a JavaScript object into an INI string.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `I` *extends* `CommonObj` | The type of the object to be converted. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `I` | The object to be converted. |
| `options`? | `EncodeOptions` | Options to pass to `ini.stringify` |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the INI string.

## Type Aliases

### DeserializeOptions

```ts
type DeserializeOptions: IniLib.DecodeOptions;
```

***

### SerializeOptions

```ts
type SerializeOptions: IniLib.EncodeOptions;
```
