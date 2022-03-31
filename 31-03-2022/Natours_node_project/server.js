const dotenv = require('dotenv');
dotenv.config({ path : './config.env' });
console.log(process.env.NODE_ENV)
const app = require('./app')

// console.log(app.get('production'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your server is running ${port}` );
});
