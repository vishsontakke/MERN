setTimeout(()=>{
    console.log('promise resolved Os');
},0)

Promise.resolve("promise resolved").then((val)=>{
    console.log(val);
});

console.log("done");