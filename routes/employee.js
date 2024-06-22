const express = require('express')
const router = express.Router();
const Employee = require('../model/employee')


// Get all Employee
router.get('/',async(req,res)=> {
    try {
        const employee =await Employee.find({});
        res.json(employee);
    } catch (error) {
        res.status(500).send(error);
        
    }

});

//add Employee 
router.post('/',async (req,res)=> {
    try {
        const {name ,joinDate,active} = req.body;
        const newEployee = new Employee({name,joinDate,active});

        await newEployee.save();
        res.status(200).send(newEployee);

    } catch (error) {
        res.status(500).send(error);
        
    }
})

module.exports = router;