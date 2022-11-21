// make simple api 
const http = require('http');
const data = require('./data')
 http.createServer((req,resp) => {
    // header
    resp.writeHead(200, {'Content-Type': 'application/json'});
    // body
    resp.write(JSON.stringify(data))
    resp.end()
 }).listen(2000)