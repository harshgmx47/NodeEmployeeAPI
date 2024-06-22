const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  joinDate: Date,
  active: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
