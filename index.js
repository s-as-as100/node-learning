// What is Express js
// Express js is framwork of node js ;

const express = require("express");
const path = require("path");
// path module is use for path for own project
const app = express();
const publicPath = path.join(__dirname, "public"); // to get [path] of public folder
app.set('view engine','ejs');

// use is the function of express js
// app.use(express.static(publicPath));

app.get("/", (_, res) =>{
    res.sendFile(`${publicPath}/index.html`);
})
 
// What is template engine used for?
// A template engine enables you to use static template files in your
//  application. At runtime, the template engine replaces 
// variables in a template file with actual values, and transforms the 
// template into an HTML file sent to the client. This approach makes it 
// easier to design an HTML page

app.get("/profile", (_, res) =>{
    let user = {
        name:'Mohd arif', 
        profession:'Associate Software Development Engineer',
        city:'New Delhi',
        skills:['html','Css', 'Javascript','React js', 'Antd','Firebase']
    }
    res.render('profile',{user})
 })
 app.get("/login", (_, res) =>{
    let user = {
        name:'Mohd arif', 
        profession:'Associate Software Development Engineer',
        city:'New Delhi',
        skills:['html','Css', 'Javascript','React js', 'Antd','Firebase']
    }
    res.render('login',{user})
 })
 app.listen(3000);










// hello 1
// 110















