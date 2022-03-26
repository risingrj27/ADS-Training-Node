const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const readFilePro = file=>{
    return new Promise((resolve, reject)=>{
       fs.readFile(file,(err,data)=>{
        if(err) reject("Your read file is rejected " +err.message);
        resolve(data);
       });
    }); 
};

const writeFilePro = (file,data)=>{
    return new Promise((resolve,reject)=>{
        if(err) reject("your write is rejected "+err.message);
        resolve('success')
    })
}

readFilePro(`${__dirname}/dog.txt`)
 .then(data=>{
    console.log(`${data}`)
    return superagent.get(`https://api.thedogapi.com/v1/breeds`)
}).then((res)=>{
        const datta = res.body;
        const datta1 = datta.map((v)=> v.image.url)
        console.log(datta1);

        return writeFilePro('dog_img.txt', JSON.stringify(datta1))
        // fs.writeFile('dog_img.txt', JSON.stringify(datta1),(err,res)=>{
        //     console.log("YOUR FILE HAS BEEN WRITTEN")
        // })
    }).then(()=>{

        console.log("YOUR FILE HAS BEEN WRITTEN")

    }).catch(err=>{

        console.log("there is an error "+err.message);
        
    })