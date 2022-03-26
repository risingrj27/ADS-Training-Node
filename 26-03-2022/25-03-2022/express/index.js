const fs = require("fs");
// const { url } = require("inspector");
const { stringify } = require("querystring");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Data : ${data}`);

  superagent
    .get(`https://api.thedogapi.com/v1/breeds`)
    .then((res) => {
      const data = res.body;
      let url1 = data.map((v) => v.image.url);
      console.log(url1);

      fs.writeFile("dog-img.txt", JSON.stringify(url1), (err) => {
        if (err) return console.log(err.message);
        console.log("your file is write in dog img text");
      });
    })
    .catch((err) => {
      console.log("there is an error " + err.message);
    });
  // console.log(res.body);
});
// fs.writeFile('dog-img.txt', res, err=>{
//   console.log(res)
// });
