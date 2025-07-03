//It returns true if the setting name is enabled and returns false if the setting name is not enabled. 


const express = require('express');
const app = express();

console.log(app.enabled('trust proxy')) // false

app.enable('trust proxy')

console.log(app.enabled('trust proxy')) // true