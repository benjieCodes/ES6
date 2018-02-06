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

const age = 100;
const people = ['Benjie', 'Anna'];

const fullNames = people.map(person => `${person} Songsong`);

console.log(fullNames);