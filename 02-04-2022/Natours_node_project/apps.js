// Application program inteface (Full Name of API)
// RestApi use the rest
const fs = require('fs');
const express = require('express');
const { json } = require('express');

const app = express();

app.use(
  express.json()
); /* this is middle ware this is used to handle the incoming data*/

// app.get("/", (req, res) => {
//   // res.status(200).send(`Hello from server side`);
//   res.status(200).json({
//     message: "Hello from server side",
//     name: "Ritesh jangra",
//     id: 1,
//     college: "Guru jambheshwar university",
//   });
//   // res.end(`hello from server side in second console`)
// });

// app.post("/", (req, res) => {
//   res.send(`you can post from the server`);
// });

// const tours = JSON.parse(
//   fs.readFile(`${__dirname}/dev-data/data/tours-simple.json`)
// )

let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  // console.log(newId);
  const newTour = Object.assign({ id: newId }, req.body);
  console.log(newTour)
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'created',
        data: {
          tour: newTour,
        },
      });
    }
  );
  // res.send('Done');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Your app is running on post ${port}`);
});
