import {
	describe,
	it,
} from 'vitest'

import { name } from '../package.json'

describe( name, () => {

	it( 'should execute "markdown" without errors', async () => {

		await import( './markdown.example' )

	} )
	it( 'should execute "html" without errors', async () => {

		await import( './html.example' )

	} )

} )
