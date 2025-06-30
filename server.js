const express = require('express');
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the About page.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Feel free to reach out!</p>');
});
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});