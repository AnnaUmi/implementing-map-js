const map = require('./map');

map.set('hello', 'hola').set('goodbuy', 'adios').set('thank u', 'gracias')

for(let value of map){
    console.log(value)
}