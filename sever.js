// timers -> pending callbakcs -> idle,prepare -> poll -> check - > close callbacks
//console.log,log,microtask,macro,check,I/o callbacks,any other
const fs = require('fs');
const crypto = require('crypto');

console.log("1. This is start of script");

setTimeout(() =>{
    console.log("2. settimeout after 0s callback (macro)");
    
},0);
setTimeout(() =>{
    console.log("3. settimeout after 0s callback (macro)");
},0);

setImmediate(()=>{
    console.log("4. setImediate callbakc (check)");
    
});

Promise.resolve().then(()=>{
    console.log("5. Promise resolved (micro task)");
    
})

process.nextTick(()=>{
    console.log("6. THis is microtask");
    
})

fs.readFile(__filename, (err, data) => {
    if (err) throw err;
    console.log("7. This is (I/O) callback");
});
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512',(err,key)=>{
    if(err) throw err
    console.log('8. pbdk2 operation completed ')
})

console.log("the script is done");
