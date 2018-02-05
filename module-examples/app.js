import {
    uniq
} from 'lodash';
import $ from 'jquery';
import defaultApiKey from './src/config';
import {
    url,
    sayHi
} from './src/config';

import User, {
    createURL,
    gravatar
} from './src/user';

const benjie = new User('Benjie', 'benjiecodes@gmail.com', 'https://github.com/benjiecodes');
const profile = createURL(benjie.name);
const image = gravatar(benjie.email);
console.table(benjie)
console.log(profile);
console.log(image);