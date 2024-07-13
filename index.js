console.log('hello');

console.log('start');

setTimeout(() => {
    console.log('inside settimeout');
}, 0);

new Promise(function (resolve) {
    console.log('inside promise excutor');
    resolve();
}).then(function () {
    console.log('Promise Resolved')
});

console.log('end');
