const {readFile} = require('fs');

const files = ['./test.js','./demo.text','./concurrency.js'];

files.forEach(files=>{
    // error first callback function
    readFile(files,(err,data)=>{

        if(err && err.code ==="ENDENT"){
            console.log(files,"not found")
        } else{
            console.log(files,data);
        }
    });
});

console.log("done!");

