var express = require('express');
var app = express();
const cheerio = require('cheerio');
const axios = require('axios');
const port = process.env.PORT || 5000;

app.get('/', (req, res, next) =>{

    let url = 'http://new.mint05.com/ADMINISTRATOR/main/login.html';

    axios.get(url).then(html => {

        // return res.send(html);
        console.log(html.data);
        // const $ = cheerio.load(html.data);

        // return res.json($);
    })
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

exports.module = app;