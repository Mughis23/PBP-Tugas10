const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaControllers = require('./controllers/mahasiswaController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', mahasiswaControllers)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});