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

// Helper function to parse date string
const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  };
  
  // Add Employee
  router.post('/', async (req, res) => {
    try {
      const { name, joinDate, active } = req.body;
      const parsedJoinDate = parseDate(joinDate);
      const newEmployee = new Employee({ name, joinDate: parsedJoinDate, active });
  
      await newEmployee.save();
      res.status(200).send(newEmployee);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // POST: Add multiple employees
router.post('/bulk', async (req, res) => {
  try {
    const employeesToAdd = req.body; // Assuming req.body is an array of employees
    
    const insertedEmployees = await Employee.insertMany(employeesToAdd);
    res.status(200).json(insertedEmployees);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;