const express = ('express');
const app = express();
const   PORT = 3000;

app.all('/user', function(req, ews, next) {
  console.log('USER API CALLED');
  next();
});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT ", PORT);
});