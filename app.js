const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Page not found</h1>`)
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})