const express = require('express');
const app = express();

app.disable('trust proxy');

console.log(app.get('trust proxy')); // false