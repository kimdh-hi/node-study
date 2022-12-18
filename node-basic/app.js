const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in middlware...');
    next();
});

app.use((req, res, next) => {
    console.log('in another middlware...');
    res.send('<h1>hello</h1>');
});


app.listen(3000);