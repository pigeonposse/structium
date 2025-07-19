import { csv } from '@structium/aio'

console.log( await csv.deserialize( `
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
` ) )
