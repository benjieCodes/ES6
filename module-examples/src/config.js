const apiKey = 'abc123';

export default apiKey; // because you exported it as default, you can name apiKey import as whatever you want

export const url = 'https://github.com/benjiecodes' // because it's not default you must name it as url when imported in a {} bracket

export function sayHi(name) {
    console.log(`Hello there ${name}`);

}