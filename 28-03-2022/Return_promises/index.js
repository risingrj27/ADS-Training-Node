const fs = require("fs");
const superagent = require("superagent");
const readFilePro = file =>{
    return new Promise();
    
}


fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`${data}`);

  superagent.get(`https://api.thedogapi.com/v1/breeds`).then((res) => {
    const data = res.body;
    const data1 = data.map((e) => e.image.url);
    // console.log(data1);

    fs.writeFile("dog_img.txt", JSON.stringify(data1), (err) => {
      if (err) return console.log("there is an error " + err.messageS);
      console.log("your file has been written");
    });
  }).catch((err)=>{
      console.log("there is an error " + err.message)
  })
});
