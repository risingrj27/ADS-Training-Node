// const fs = require('fs');
const Tour = require('../models/tourModels')

/*const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);*/ // to convert string into javascript object

exports.checkID = (req, res, next, val) => {
  console.log(`Tour ID is ${val}`);
  // if (req.params.id > tours.length) {
  //   return res.status(404).json({
  //     status: 'Fail',
  //     message: 'Id is not Valid',
  //   });
  // }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'fail',
      message: 'you doesnt have name and price',
    });
  }
  next();
};

exports.getAllTours =  async (req, res) => {
  //   console.log(req.requestTime);
  try{
    const tours = await Tour.find();
  res.status(200).json({
    status: 'Success',
    // requested: req.requestTime,
    result: tours.length,
    data: {
       tours
    }
  })
  }catch(err){
    res.status(400).json({
      status : 'fail',
      message : err
    })
  }
}  


exports.getTour = async (req, res) => {
  //   console.log(req.params);
  // const id = req.params.id * 1; // convert to number
  // const tourss = tours.find((el) => el.id === id);
  try{
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status : 'success',
        tour
    })
  } catch(err){
    res.status(404).json({
      status : 'fail',
      message : err
    })
  }
  //   if (!tourss) {
  //     return res.status(404).json({
  //       status: 'Fail',
  //       message: 'Invalid ID',
  //     });
  //   }
  // res.status(200).json({
  //   status: 'Success',
  //   // data: tourss,
  //   // result : tours.length,
  //   // data : {
  //   //     tours
  //   // }
  // });
};


exports.createTour = async (req, res) => {
try{
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status : 'successs',
    data:{
      tour : newTour
    }
  });   
} catch (err){
    res.status(400).json({
      status: 'fail',
      message: err
    })
  } 
  // const newId = tours[tours.length - 1].id + 1;
  // const tour = Object.assign({ id: newId }, req.body);
  // //   console.log(req.body);

  // tours.push(tour);

  // fs.writeFile(
  //   `${__dirname}/../dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'Created',
  //       Newtour: tour,
  //     });
  //   }
  // );
  
}
  

exports.updateTour = (req, res) => {
  // console.log(req.body.duration);

  //   if (req.params.id > tours.length) {
  //     return res.status(404).json({
  //       status: 'Fail',
  //       message: 'Id is not Valid',
  //     });
  //   }
  try{

    Tour.findByIdAndUpdate(req.params.)
    res.status(200).json({
      status: 'Updated',
      data: {
        Tour: '<Your tour is now updated>',
      },
    });
  } catch(err){
    res.status(404).json({
      status :'fail',
      message : err
    })
  }
  
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'Updated',
    data: null,
  });
};
