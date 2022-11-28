// What is Express js
// Express js is framwork of node js ;

const express = require("express");
const path = require("path");
// path module is use for path for own project
const app = express();
const publicPath = path.join(__dirname, "public"); // to get [path] of public folder

// use is the function of express js
// app.use(express.static(publicPath));

app.get("/", (_, res) =>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get("/about", (_, res) =>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get("/home", (_, res) =>{
    res.sendFile(`${publicPath}/home.html`);
})

// static load the content of static file

// console.log(__dirname)// to get path of directory
app.listen(3400);
