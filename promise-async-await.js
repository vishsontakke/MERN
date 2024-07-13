function isEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve('it is even');
        } else {
            reject('it is odd');
        }
    })
}

// isEven(4).then(res=>{
//     console.log(res);
//     return isEven(6)
// }).then(res => {
//     console.log(res);
// })
// .catch(err=>{
//     console.log('err' ,err)
// });

console.log('Done!');

async function main() {
    try {
        let res = await isEven(4);
        console.log(4, res);
        res = await isEven(8);
        console.log(8, res);
        res = await isEven(3);
    } catch (err) {
        console.log('error', err);
 
    }
}
main();