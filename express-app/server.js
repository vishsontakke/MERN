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
app.use('/public',express.static( __dirname+'/node_modules/bootstrap/dist'));

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

app.get('/error',(req,res)=>{
    // res.send('')
    throw new Error('Ooops Some error occured');
});
//wild card ur;
// always have to metion it at last 
app.get('**',(req,res)=>{
    res.send('Url not found');
});

//error handling middleware

app.use((err,req, res,next)=>{
    console.log(err);
    res.send("some error occured");
});
app.listen(4000,()=>{
    console.log('statretr');
});
