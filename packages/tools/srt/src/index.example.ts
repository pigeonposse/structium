import * as srt from '../dist'

const DATA = `
57
00:03:29,628 --> 00:03:34,143
Hay muchas pistas ocultas en sus enigmáticas palabras!

58
00:03:34,143 --> 00:03:36,583
¡Tú eres el enigma!
`
const obj    = await srt.deserialize( DATA )
const string = await srt.serialize( obj )

console.log( {
	obj,
	string,
} )
