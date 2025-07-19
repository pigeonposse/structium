# `structium` - API documentation

## Functions

### defineConfig()

```ts
function defineConfig(config: Config): Config
```

Define a configuration for `structium`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Config`](#config) | The configuration. |

#### Returns

[`Config`](#config)

The configuration.

## Type Aliases

### Config

```ts
type Config: {
  plugins: Record<string, Plugin>;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `plugins`? | `Record`\<`string`, [`Plugin`](#plugin)\> |

***

### Plugin

```ts
type Plugin: {
  deserialize: (input: string) => Promise<Any>;
  serialize: (input: Any) => Promise<string>;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `deserialize` | (`input`: `string`) => `Promise`\<`Any`\> |
| `serialize` | (`input`: `Any`) => `Promise`\<`string`\> |

## Variables

### default

```ts
const default: Clippium<ClippiumDataWithPlugins>;
```

## Namespaces

- [tools](namespaces/tools/index.md)
