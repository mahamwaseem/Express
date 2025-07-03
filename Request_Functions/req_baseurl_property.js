//The req.baseUrl property is the URL path on which a router instance was mounted. The req.baseUrl property is similar to the mount path property of the app object, except app.mountpath returns the matched path pattern(s). 
const express = require('express');
const e = require('express');
const app = express();
const PORT = 3000;

const student = express.Router();
app.use('/student', student);

student.get('/signup', function (req, res) {
    if (req.baseUrl == '/student') {
        console.log("Show Signup Form");
        res.end();
    } else {
        console.log("Invalid Request")
        res.send("Invalid Route")
    }
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});