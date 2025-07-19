import {
	fromBER,
	Sequence,
	Utf8String,
	Integer,
	OctetString,
} from 'asn1js'

export type ASN1Value = string | number | Uint8Array
export type ASN1Data = Record<string, ASN1Value>

export const deserialize = async ( input: ArrayBuffer ): Promise<ASN1Data> => {

	const { result } = fromBER( input )

	if ( !( result instanceof Sequence ) ) {

		throw new Error( 'Invalid ASN.1: Expected top-level Sequence' )

	}

	const output: ASN1Data = {}

	result.valueBlock.value.forEach( ( element, index ) => {

		const key = `field_${index}`

		if ( element instanceof Utf8String ) {

			output[key] = element.valueBlock.value

		}
		else if ( element instanceof Integer ) {

			output[key] = element.valueBlock.valueDec

		}
		else if ( element instanceof OctetString ) {

			output[key] = new Uint8Array( element.valueBlock.valueHex )

		}
		else {

			output[key] = `Unsupported(${element.constructor.name})`

		}

	} )

	return output

}

export const serialize = async ( input: ASN1Data ): Promise<ArrayBuffer> => {

	const sequence = new Sequence( { value : Object.entries( input ).map( ( [ _, val ] ) => {

		if ( typeof val === 'string' ) {

			return new Utf8String( { value: val } )

		}
		else if ( typeof val === 'number' ) {

			return new Integer( { value: val } )

		}
		else if ( val instanceof Uint8Array ) {

			return new OctetString( { valueHex: val } )

		}
		else {

			throw new Error( `Unsupported value type: ${typeof val}` )

		}

	} ) } )

	return sequence.toBER()

}
