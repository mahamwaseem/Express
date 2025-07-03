const express = require('express');
const app = express();

console.log(app.disabled('trust proxy')) // true

app.enable('trust proxy')

console.log(app.disabled('trust proxy')) // false

//trust proxy is a setting in Express that tells your app whether or not to trust the X-Forwarded-* headers.