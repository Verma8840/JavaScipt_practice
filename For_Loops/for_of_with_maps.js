// define Map
let map = new Map();

// inserting elements
map.set('name', 'Virendra');
map.set('age', '21');

// looping through Map
for (let [key, value] of map) {
    console.log(key + '- ' + value);
}