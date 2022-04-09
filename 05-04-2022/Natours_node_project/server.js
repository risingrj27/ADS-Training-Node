const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// const Tour = require('')

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    // mongoose.connect(process.env.DATABASE_LOCAL,{   /*this is local database file*/
    useNewUrlParser: true,
    // useCreateIndex:true,
    // useFindAndModify:false
  })
  .then(() => {
    // console.log(con.connections)
    console.log('DB connection successfull');
  });
// console.log(process.env.NODE_ENV);
// console.log(app.get('production'))




// const testTour = new Tour({
//   name : 'The Circus Show',
//   price: 997,
//   rating : 4.8
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error ', err);
//   });

const port =  3000; /*process.env.PORT || */
app.listen(port, () => {
  console.log(`Your server is running ${port}`);
});
