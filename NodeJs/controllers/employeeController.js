const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee');

// => localhost : 3000/employees/list
router.get('/list',(req,res) => {
    Employee.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }

        else{
            console.log('Error in Retriving Employees : '+JSON.stringify(err,undefined,2));

        }
    });
});

module.exports = router;