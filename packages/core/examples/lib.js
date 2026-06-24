import {
	csv, srt,
} from 'structium'

console.log( await csv.deserialize( `
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
` ) )

console.log( await srt.deserialize( `
57
00:03:29,628 --> 00:03:34,143
Hay muchas pistas ocultas en sus enigmáticas palabras!

58
00:03:34,143 --> 00:03:36,583
¡Tú eres el enigma!
` ) )
