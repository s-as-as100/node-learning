//  Asynchronous Basics in Node js 

// In Synchronous operations tasks are performed one at  a time

// In Asynchronous operations , Second task do not wait to finish
// the first task  

// Example --> Advantage

console.log("Start execution");

setTimeout(() => {
    console.log('Logic execution')
}, 2000);

console.log('Complete execution');

// Output :
// Start execution-->Complete execution-->Logic execution 
// Because Js is Asynchronous Programming Language

// Disadvantages :
let a= 10;
let b=0;

setTimeout(() => {
    b=20;
}, 2000);

console.log(a+b);

// Output : 10 Because it dont run console.log again this is 
// drawback of asychronous programming language
















