const EventEmitter = require("events");

const myevent = new EventEmitter();

setTimeout(()=>{
    myevent.emit('TEST_EVENT','Hello');
})
myevent.on('TEST_EVENT',(data)=>{
    console.log('event captured2',data);
});
myevent.on('TEST_EVENT',()=>{
    console.log('event captured3');
});
myevent.on('TEST_EVENT',(data)=>{
    console.log('event captured4',data);
});
myevent.on('TEST_EVENT',()=>{
    console.log('event captured5');
});
myevent.on('TEST_EVENT',()=>{
    console.log('event captured6');
});


