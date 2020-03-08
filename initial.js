const http = require('http');
const host = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('It\'s everting OK!');
});

server.listen(port, host, () => {
    console.log('Server running');
});
