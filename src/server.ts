
//Require express.js
const express = require('express');
const bodyParser = require('body-parser');
import { Show } from './Show';
import { readFileSync } from 'fs';

//Let's make a new express app
const app = express();

//app variables
let showsToWatch: Array<Show> = new Array<Show>();

// Let's try adding some shows from a file

let configDir = process.env.MOVIE_CONFIG_DIR || '/cfg/movies.csv';

try {
    let defaultMovies = readFileSync(configDir).toString().split("\n");
    defaultMovies.forEach((m) => {
        let name = m.trim();
        if(name) {
            showsToWatch.push(new Show(showsToWatch.length, m));
        }
    });
} catch (err) {
    console.log("Unable to prepopulate movie list:", err);
}

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

app.get('/shows/:id', (req, res) => {

    let id = Number.parseInt(req.params.id);
    let show = showsToWatch.find(show => show.id === id);
    res.json(show);

})

app.post('/shows', (req, res) => {

    let showName = req.body.show;
    let newId = showsToWatch.length;
    let show = new Show(newId, showName);

    showsToWatch.push(show);
    res.json("Added!");

});

//Let's listen on a port for requests
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

