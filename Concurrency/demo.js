const {writeFileSync} = require('fs');

let element = "";
for (let index = 0; index < 1000000; index++) {
     element += 'hello' ;
}

writeFileSync('demo.text',element);