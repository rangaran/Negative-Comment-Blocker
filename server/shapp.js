const express = require('express');
const bodyParser = require('body-parser');
const shRoute = require('./sh.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', shRoute);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

