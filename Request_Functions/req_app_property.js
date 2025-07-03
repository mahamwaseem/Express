const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    console.log(req.app); //console.log(req.app._eventsCount);
    res.send();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});