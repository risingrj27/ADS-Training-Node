const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    /*we Pass Our schema as a object in our tours collections */
    // name: String,
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
    },
    // price : Number,
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    // rating: Number
    rating: {
      type: Number,
      default: 4.5,
    },
  });

  const Tour = mongoose.model(
    'Tour',
    tourSchema
  ); /*this is tour schema when we deal wit schema we only define capital letter*/
  
module.exports = Tour;