const fs = require('fs')
const crypto = require('crypto')
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(()=> console.log("this is timeout function"),3000);
setImmediate(()=> console.log("this is immediate function"));


fs.readFile('./text.txt', ()=>{
    console.log("this is fs file system")
    crypto.pbkdf2("password","salt", 10000, 1024, "sha512",()=>{
        console.log(Date.now()-start,"this is crypto password");
    })
    crypto.pbkdf2("password","salt", 10000, 1024, "sha512",()=>{
        console.log(Date.now()-start,"this is crypto password");
    })
    crypto.pbkdf2("password","salt", 10000, 1024, "sha512",()=>{
        console.log(Date.now() - start,"this is crypto password");
    })
    crypto.pbkdf2("password","salt", 10000, 1024, "sha512",()=>{
        console.log(Date.now()-start,"this is crypto password");
    })
    crypto.pbkdf2("password","salt", 10000, 1024, "sha512",()=>{
        console.log(Date.now()-start,"this is crypto password");
    })
});

console.log("this is my main console function")
