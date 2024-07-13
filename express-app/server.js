const express = require ('express');

const app = express();

// const appLevelMiddleware = (req,res,next)=>{
//     console.log("app in moddleware");
//     next();
// };
// // then you have to pass that moddleware to the use 

const authenticate = (req,res,next)=>{
    const {api_key} = req.query;

    if(api_key && api_key ==="vishal"){
        return next();
    } 
    res.status(401).send('unauthenticated');
}
// app.use(appLevelMiddleware);

app.use('/public',express.static( __dirname+'/images'));

app.get('/',(req,res)=>{
    // res.send('Express Started');
    res.sendFile(__dirname+'/index.html')
});
app.get('/about',(req,res)=>{
    res.send('Express About!');
});

app.get('/contact',authenticate,(req,res)=>{
    // console.log(req.query);
    // const {name, id} = req.query;
    res.send('Express contact!');
});

app.get('/users/:id',(req,res)=>{
    //to get dynamic parameters from a params
    console.log(req.params);
    res.send('Express uers!'+req.params.id);
});
//wild card ur;
// always have to metion it at last 
app.get('**',(req,res)=>{
    res.send('Url not found');
});

app.listen(4000,()=>{
    console.log('statretr');
});
