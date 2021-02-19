[@aschenoni/jargon](../README.md) / default

# Class: default

## Indexable

▪ [index: *string*]: *any*

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [options](default.md#options)
- [positionals](default.md#positionals)

### Methods

- [assertRequired](default.md#assertrequired)
- [assignOptions](default.md#assignoptions)
- [assignPositionals](default.md#assignpositionals)
- [parse](default.md#parse)

## Constructors

### constructor

\+ **new default**(): [*default*](default.md)

**Returns:** [*default*](default.md)

## Properties

### options

• **options**: *string*[]

Defined in: [Jargon.ts:3](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L3)

___

### positionals

• **positionals**: *string*[]

Defined in: [Jargon.ts:4](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L4)

## Methods

### assertRequired

▸ `Private`**assertRequired**(`positionalArgs`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`positionalArgs` | *string*[] |

**Returns:** *void*

Defined in: [Jargon.ts:65](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L65)

___

### assignOptions

▸ `Private`**assignOptions**(`optionsArgs`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`optionsArgs` | *string*[] |

**Returns:** *void*

Defined in: [Jargon.ts:27](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L27)

___

### assignPositionals

▸ `Private`**assignPositionals**(`positionalArgs`: *string*[], `positionals`: *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`positionalArgs` | *string*[] |
`positionals` | *string*[] |

**Returns:** *void*

Defined in: [Jargon.ts:52](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L52)

___

### parse

▸ **parse**(): *void*

**Returns:** *void*

Defined in: [Jargon.ts:6](https://github.com/aschenoni/jargon/blob/814b89d/src/Jargon.ts#L6)
