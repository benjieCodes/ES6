const {
    x,
    y,
    ...z
} = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
};

function add(x, y) {
    return x + y
}
console.log(add(2, 3));

const age = 100;
const people = ['Benjie', 'Anna'];

const fullNames = people.map(person => `${person} Songsong`);

console.log(fullNames[0]);