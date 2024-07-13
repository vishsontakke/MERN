// const fs = require('fs');
// const util = require('util');


// convert any error first callaback function to promise
// const readFile = util.promisify(fs.readFile);

const { readFile, writeFile } = require('fs/promises');


async function readfiles() {
    try {
        const data = await readFile(__filename);
        console.log(data);
        await writeFile(__filename + '.copy', data);
    } catch (err) {

    }
}

readfiles();

console.log('done!');