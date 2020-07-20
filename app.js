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
        let $ = cheerio.load(html.data);
        let smp = {};

        $('input[name=admin_id]').val('yeo1120');
        $('input[name=admin_pw]').val('123123');

        // document.login.submit();
        // return res.json($);
    })
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

exports.module = app;