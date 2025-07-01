//app.locals is an object that holds local variables which are accessible throughout the entire Express application. These variables are typically used to store global settings such as application configurations, shared data, or values that need to be passed to views and templates. They are stored as key-value pairs and are available to all routes and middleware.
//index.js
const express = require('express');
const app = express();

app.locals.domain = 'www.sample.com';  // Setting global domain
app.locals.age = '24';  // Setting global age
app.locals.company = 'ABC Ltd';  // Setting global company

app.get('/', (req, res) => {
  res.send(app.locals);  // Accessing multiple global variables
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});