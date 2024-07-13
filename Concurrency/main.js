const { error } = require('console');
const {readFileSync} = require('fs');

const files = ['./test.js','./demo.text','./concurrency.js'];

files.forEach((files)=>{
    try{
        const data = readFileSync(files);
        console.log(files,data);
    }catch(err){
        if(err.code == "ENOENT"){
            console.log('file not found');
        }else{
            throw new Error('something went wrong');
        }
    }
});

console.log('files read successfully');