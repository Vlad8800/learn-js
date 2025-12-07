import{PI,  getCurcumference, getArea,getVolume} from './mathUtil.js';

console.log("PI:", PI);

const circumference = getCurcumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log("Circumference of circle with radius 10:", circumference);
console.log("Area of circle with radius 10:", area);
console.log("Volume of sphere with radius 10:", volume);