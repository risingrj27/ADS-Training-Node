const morgan = require('morgan');
const express = require('express');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json()); // it is basically a middle ware to handle the req and res data
// creating middleware
// app.use((req, res, next) => {
//     console.log('Hello from the middleware ');
//     next();
// });

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// Using patch method
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour );


// const tourRouter = express.Router();
// const userRouter = express.Router(); //this is middleware for all routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// tourRouter.route('/').get(getAllTours).post(getTour);
// tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

// app.route('/api/v1/tours').get(getAllTours).post(getTour);
// app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

// userRouter.route('/').get(getAllUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = app;