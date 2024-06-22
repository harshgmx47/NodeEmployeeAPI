const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('../routes/employee');

const app = express();

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Use employee routes
app.use('/api/employees', employeeRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
