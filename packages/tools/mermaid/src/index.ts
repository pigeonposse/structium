import {
	parseAsync,
	render,
	type MermaidAST,
} from 'mermaid-ast'

export type Value = MermaidAST

export const deserialize = async ( input: string ): Promise<Value> => {

	return await parseAsync( input )

}

export const serialize = async ( input: Value ): Promise<string> => {

	return render( input )

}
