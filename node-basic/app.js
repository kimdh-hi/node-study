const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.urlencoded({extended: false}));

// '/add-product' ==> '/add-product/**'
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add</button></input></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


// '/' ==> '/**'
app.use('/', (req, res, next) => {
    res.send('<h1>root</h1>');
});


app.listen(3000);