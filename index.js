// What is Express js
// Express js is framwork of node js ;

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // req --> receive from client 
    console.log('data receive from client', req.query);
    // res -> send to client
    res.send('Hello , this is home page')
})
app.get('/about',(req,res)=>{
    // res.send('Hello , this is About page')
    res.send(`<input type="text" name="" placeholder="hello"
    <button type="submit>hero</button>
    `)

});

app.get('/help',(req,res)=>{
    res.send('Hello , this is Help page')
});
// restart server if add any code :
app.listen(4000);

// Render html tag;


// Basic method of string;

// 1.Length : Check the length of the string;
const myString = ' I love you ';
console.log(myString.length);

//2 Trim : Remove whitespace at the beginning and at the end;
console.log(myString.trim());

// 3. Split : Convert a string to an array
const array = myString.split('');
console.log(array);

// 4. Include: Return true if the string contains a particular 
// string . In other case return false
if(myString.includes('loves')) {
    console.log('yes')
}
else {
    console.log('no')
}

// 5. Char At : get the character at a specific position in a string :
console.log(myString.charAt(5)) // --> v

// Slice : Extract a part of a particular string :
console.log(myString.slice(2,6))










