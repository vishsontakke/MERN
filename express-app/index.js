const http = require('http');

const server =  http.createServer((req , res)=>{
    console.dir(req,{depth:0});
    if(req.url === '/'){
        res.write("Hello World");
    }else if( req.url === '/about'){
        res.write("about");
    }else if (req.url){
        res.write("contact ");
    }
    res.end();
});

server.listen(4000,()=>{
    console.log('Server Started');
});