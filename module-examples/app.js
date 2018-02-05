import {
    uniq
} from 'lodash';
import $ from 'jquery';
import defaultApiKey from './src/config';
import {
    url,
    sayHi
} from './src/config';
console.log(defaultApiKey, +' : ' + url);

sayHi('Benjie')


const ages = [1, 41, 42, 42, 5];

console.log(uniq(ages));
console.log($);