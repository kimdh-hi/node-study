const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(parser.urlencoded({extended: false}));

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res
    .status(404)
    .sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);