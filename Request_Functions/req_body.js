const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', function (req, res) {
    const data = req.body;

    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);

    res.send();
});
app.get('/signup', (req, res) => {
  res.send('Signup page loaded');
});


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});