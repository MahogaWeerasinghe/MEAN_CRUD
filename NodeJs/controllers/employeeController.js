const express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();

var { Employee } = require('../models/employee');

// => localhost : 3000/employees/Getlist
router.get('/Getlist',(req,res) => {
    Employee.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }

        else{
            console.log('Error in Retriving Employees : '+JSON.stringify(err,undefined,2));

        }
    });
});

router.get('/:id',(req,res)=>{
  if(!isValidObjectId(req.params.id))
      return res.status(400).send('No record with given id : ' + req.params.id);
  
  Employee.findById(req.params.id,(err,doc)=>{
      if(!err){
          res.send(doc);
      }
      else{
          console.log('Error in retriving Employee : '+JSON.stringify(err,undefined,2))
      }
  })
}) 

router.post('/insertdetails',(req,res)=>{
    var emp = new Employee({
        name: req.body.name,
        position : req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    });

    emp.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Employee Save : ' +JSON.stringify(err,undefined,2));
        }
    })
})


 router.put('/:id',(req,res) => {
  if(!isValidObjectId(req.params.id))
      return res.status(400).send('No record with given id : ' + req.params.id);
  
    var emp = {
      name:req.body.name,
      position:req.body.position,
      office:req.body.office,
      salary:req.body.salary,
    };
    console.log(req.body.id);
    Employee.findByIdAndUpdate(req.body.id,{$set:emp},{new:true},(err,doc)=>{
      if(!err){
        res.send(doc);
      }
      else{
        console.log('Error in Employee Update : ' + JSON.stringify(err,undefined,2))
      }
    })
})  

router.delete('/:id',(req,res) => {
  if(!isValidObjectId(req.params.id))
  return res.status(400).send('No record with given id : ' + req.params.id)

  Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err){
      res.send(doc);
    }
    else{
      console.log('Error in Employee Delete : '+JSON.stringify(err,undefined,2))
    }
  })
})

module.exports = router;