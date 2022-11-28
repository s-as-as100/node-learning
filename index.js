// What is Express js
// Express js is framwork of node js ;

const express = require('express');
const path = require('path');
const app = express();
const publicPath=path.join(__dirname, 'public')// to get [path] of public folder

// use is the function of express js 
app.use(express.static(publicPath))

// static load the content of static file

// console.log(__dirname)// to get path of directory
app.listen(3400)









