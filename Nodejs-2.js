// import {r,g} from './Nodejs-1'

// error show 
var data = "mohd";
console.log(data);
// show undefined because no return statement

// Browser Console and  js file console is same thing?
// NO : The Console module provides a simple debugging console that is 
// similar to the js console mechanism provided by web browsers
// console.log(data); is not part of js 


// Fundamental Of Node js 
// error show cannot use import statement outside the module 
// Not used import because node js used old js till now

// 
const app = require('./app');
console.log(app.z())

const arr = [12,3,4,5,6,7,8,9,10,11];
const result =arr.filter((item) => item===3);
console.log(result)


 










