// blocking code synchronous code
const fs =require('fs');
// const file = fs.readFileSync('fileSystem.txt','utf-8');
// console.log(file);
// const textOut = `this is what we know about programming : ${file} and date today ${Date.now()}`;
// fs.writeFileSync(`output.txt`,textOut);

// Non blocking asynchronous code

fs.readFile('start.txt','utf-8',(err,data1)=>{
    if(err) console.log("error ocur")
    fs.readFile(`${data1}.txt`,'utf-8',(err, data2)=>{
        console.log(data2);
        fs.writeFile('final.txt',`${data1}\n ${data2}`,'utf-8' ,err=>{
            console.log("your fie has been written")
        })
    })
});
// console.log("this is new concepts for me but i will do it ")