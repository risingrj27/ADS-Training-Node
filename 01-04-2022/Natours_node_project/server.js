const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  // useFindAndModify:false
}).then(con=>{ console.log("DB connection successfull", con.connections);
})
// console.log(process.env.NODE_ENV);
// console.log(app.get('production'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your server is running ${port}`);
});
