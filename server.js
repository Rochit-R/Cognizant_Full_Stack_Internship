const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('result', { name, email });
});