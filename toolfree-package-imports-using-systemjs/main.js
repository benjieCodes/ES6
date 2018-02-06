import {
    kebabCase
} from 'npm:lodash';

import {
    addTax
} from './checkout';

console.log(kebabCase('benjie is using kebab case on lodash without npm installing anything'));
console.log(addTax(100, 0.20));