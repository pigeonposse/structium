
export const deserialize = async ( input: string ) => {

	const { parseToObject } = await import( 'hcl2-parser' )

	return await parseToObject( input )

}

