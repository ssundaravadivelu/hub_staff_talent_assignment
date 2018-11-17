const express = require('express');
const app = express();
const fetch = require('isomorphic-fetch');

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/jobdescriptions', function (req, res) {
    fetch('http://127.0.0.1:9000/api/jobdescriptions/').then((response) => {
        response.json().then((responseJson) => res.json(responseJson));
    });
});

app.get('/', function (req, res) {
res.send('****Node App Built with Express Js****')
});

app.listen(4000);

console.log('Node Service Running On Port: 4000'); 