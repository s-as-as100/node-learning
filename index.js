const http = require('http');
// http module handle server request and response.
http.createServer((req,resp)=>{
    // send data to client using resp
    resp.write("hello world!ss");
    resp.end()
}).listen(4500)
// createServer take function as parameter

function controller(req,resp) {
    resp.write("<h1>Hello world!</h1>");
    resp.end()
}

http.createServer(controller).listen(1000)


// Node js is async 
// 1. Run first Script
// 2. Run second Script ( complex data )
//-- it will not wait to finish 2nd script 
// run third script 
// continue 