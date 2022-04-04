const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID); //CUSTOM MIDDLEWARE
//1. CREATING MIDDLEWARE TO CHECKBODY MIDDLEWARE
//2. CHECK IF BODY CONTAINS THE NAME AND PRICE PROPERTY

// app.use('/api/v1/tours', routers);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
