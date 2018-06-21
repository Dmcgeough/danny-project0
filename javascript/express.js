var express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/online-store', (req, res) => {
    res.sendFile(path.join(__dirname, './online-store.html'));
});

app.get('/mission-statement', (req, res) => {
    res.sendFile(path.join(__dirname, './mission-statement.html'));
});

app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, './shopping-cart.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, './contact-us.html'));
});

app.listen(5051);