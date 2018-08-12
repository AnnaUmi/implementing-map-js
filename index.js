const createMap = require('./map');

let phones = createMap();
let contacts = createMap();

phones.set('model', 'iPhone').set('madeBy', 'Apple').set('madeIn', 'China');
contacts.set('Anna Vlasenko', 'email@annavlasenko.com').set('Spiderman', 'email@spiderman.com');

console.log(contacts.keys)
for(let key of phones){
    console.log(key)
}