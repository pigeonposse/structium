#!/usr/bin/env node

import { hideBin } from 'clippium'
import { argv }    from 'node:process'

import cli from '.'

const args = hideBin( argv )
cli.run( args )
