import {
	describe,
	it,
} from 'vitest'

import { name } from '../package.json'

describe( name, () => {

	it( 'should execute "index" without errors', async () => {

		await import( './index.example' )

	} )

} )
