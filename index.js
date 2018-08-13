const createMap = require('./map');

let phones = new createMap();
let contacts = new createMap();

phones.set('model', 'iPhone').set('madeBy', 'Apple').set('madeIn', 'China');
contacts.set('Anna Vlasenko', 'email@annavlasenko.com').set('Spiderman', 'email@spiderman.com');

console.log(phones)