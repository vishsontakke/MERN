const http = require('http');

const listner = (req, res) => {
    res.write('hello world');
    res.end();
}

const server = http.createServer(listner);

server.listen(4000, () => {
    console.log("server is running");
    
});