const express = require('express');
const app = express();

app.enable('trust proxy')

console.log(app.get('trust proxy')) // true