// modules in JS - can add module support in JS by referring to js file type as "module" when linking it in html
// must import module path with what we plan to use in this project

import {PI, getCircumference, getArea} from './mathUtil.js';
console.log(`Pi: ${PI}`);
console.log(`Circumference of 10: ${getCircumference(10)}`);
console.log(`Area of 10: ${getArea(10)}`);