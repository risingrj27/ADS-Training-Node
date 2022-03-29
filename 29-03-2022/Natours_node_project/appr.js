const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); /*basically this is middle ware use in express*/ 
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
// console.log(tours)

app.get('/api/v1/tours', (req, res)=>{
    res.status(200).json({
        status : 'successful',
        Data_Length : tours.length,
        data:{
            tours
        }
    })
});

/*URL parameters*/app.get('/api/v1/tours/:id/:x?', (req, res)=>{
    console.log(req.params); //params are use to assign the url varible assign to them or if we want to ignore then we use ?
    const id = req.params.id*1; // convert string to number

    if(id > tours.length){
        return res.status(400).json({
            status : 'fail',
            message : 'Invalid ID'
        })
    }
    const tour = tours.find((el)=> el.id === id)
    res.status(200).json({
        status : 'successful',
        // Data_Length : tours.length,
        data:{
            tour
        }
    })
});

app.post('/api/v1/tours',(req, res)=>{
    const newId = tours[tours.length-1].id+1;
    const newTour = Object.assign({id:newId},req.body); // overwrite the object  object.assign(target, source)

    tours.push(newTour); // push this to an existing object
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours) ,(err)=>{
        res.status(201).json({
            status : 'success',
            tour : newTour
        })
    })
    // res.send('done')
})

const port =3000;
app.listen(port , ()=>{
    console.log(`Your app is running on server side ${port}`);
})