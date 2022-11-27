// What is Express js
// Express js is framwork of node js ;

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Hello , this is home page')
})
app.get('/about',(req,res)=>{
    res.send('Hello , this is About page')
});

app.get('/help',(req,res)=>{
    res.send('Hello , this is Help page')
});
// restart server if add any code :
app.listen(4000);




