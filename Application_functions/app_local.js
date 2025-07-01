//app.locals is an object that holds local variables which are accessible throughout the entire Express application. These variables are typically used to store global settings such as application configurations, shared data, or values that need to be passed to views and templates. They are stored as key-value pairs and are available to all routes and middleware.
const express = require('express');
const app = express();

app.local.email = 'abs@gmail.com';

app.get('/', (rea, res) => {
  res.send(app.local.email);
});

app.listen(3000, ()=>{
  console.log('Server running on port 3000');
});