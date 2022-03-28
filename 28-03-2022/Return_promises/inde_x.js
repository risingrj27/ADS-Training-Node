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

const writeFilePro = (file, data)=>{
    return new Promise((resolve,reject)=>{
        // if(err) reject("your write is rejected "+err.message);
        resolve("Success");
    }
)};

const getDogPic = async () =>{
    try{
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed :${data}`);

    const res1pro = superagent.get(`https://api.thedogapi.com/v1/breeds`);
    const res2pro = superagent.get(`https://api.thedogapi.com/v1/breeds`);
    const res3pro = superagent.get(`https://api.thedogapi.com/v1/breeds`);

    const all = await Promise.all([res1pro,res2pro,res3pro]);    

    const data1= all.map(el=> el.body)
    const v = data1.map(e=> e.image);
    console.log(JSON.stringify(v[0]))
    // const data2 = data1.map(v => v.image.url );
    // var data3 = JSON.stringify(data2);
    // console.log(data3);

    await writeFilePro('dog_img.txt', data3);
    console.log("Random Images save into file");

    }catch(err) {
        console.log(err);
        throw(err)
    }

    return `2.ready for the pics`

};


(async ()=>{
    try{
        console.log("1. i will get dog pics");
        const x = await getDogPic();    
        console.log(x)
        console.log("2. Done i am getting dog pics")
    }catch(err){
        console.log(err);   
    }
})();

/*
console.log("1. getting dog pics")
 getDogPic().then(x=>{
    console.log(x);
    console.log("3. Done geting dog pics"); 
 })
 .catch(err =>{
     console.log(err)
 })
*/

/*
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
    */