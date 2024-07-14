// const http = require('http');

// const sever = http.createServer((req,res)=>{
//     // console.log("server");
//     // res.write('hello world');
//     if (req.url === "/about"){
//         res.write('hello about page');
//     } else if(req.url === "/contact"){
//         res.write('hello contact page');
//     }
//     res.end();
// });

// sever.listen(4000,()=>{
//     console.log('Server Started');
// });


const express = require('express');

const app = express();



app.get('/about',(req, res)=>{
        res.send("hello");
});

app.get('/',(req,res)=>{
    res.send('Home page1');
});

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    console.log(req.query);
    const {name} = req.query;
    if(id){
        res.send('Home page 2'+ name);
    } else{
        res.send('Unautorise');
    }
});
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('**',(req, res)=>{
    res.send('Url Not Found');
});


app.listen(4000,()=>{
    console.log('started');
});
