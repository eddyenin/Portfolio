const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const {check, validationResult } = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res) => {
    res.render('');
});

app.get('/about', (req,res) => {
    res.render("about");

});

app.get('/portfolio', (req,res) => {
    res.render("portfolio");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server is running in port ${PORT}`)
});
