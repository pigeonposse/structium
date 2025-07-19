# `@structium/asn1` - API documentation

## Functions

### deserialize()

```ts
function deserialize(input: ArrayBuffer): Promise<ASN1Data>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `ArrayBuffer` |

#### Returns

`Promise`\<[`ASN1Data`](#asn1data)\>

***

### serialize()

```ts
function serialize(input: ASN1Data): Promise<ArrayBuffer>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ASN1Data`](#asn1data) |

#### Returns

`Promise`\<`ArrayBuffer`\>

## Type Aliases

### ASN1Data

```ts
type ASN1Data: Record<string, ASN1Value>;
```

***

### ASN1Value

```ts
type ASN1Value: string | number | Uint8Array;
```
