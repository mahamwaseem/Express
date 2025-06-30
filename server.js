const express = require('express');
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});
