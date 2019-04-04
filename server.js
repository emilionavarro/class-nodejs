
//Require express.js
const express = require('express');
const bodyParser = require('body-parser')

//Let's make a new express app
const app = express();

//app variables
let showsToWatch = [];

//Let's write some middleware
app.use((req, res, next) => {

    console.log(`Request coming in: ${req.method} ${req.path}!`);
    next();

});

app.use(bodyParser());

//Let's write some routes
app.get('/', (req, res) => {

    console.log("I'm alive!");
    res.json("Hello :)");

});

app.get('/shows', (req, res) => {

    res.json(showsToWatch);

});

//Let's listen on a port for requests
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

