import { Bulb } from './components/bulb/bulb';
import { Garland } from './components/garland/garland';
import { Select } from './components/select/select';

import './lesson14.scss';

import './components/select/select';

const bulb = new Bulb(document.querySelector('#bulb1'));
const graland = new Garland(document.querySelector('#garland1'));
const countries = ['USA', 'UKRAINE', 'MONTENEGRO', 'FRANCE'];
const countriesList = new Select(document.querySelector('#countriesList'), countries);