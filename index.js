const express = require('express');
const logger = require('./logger');
const keywordsRouter = require('./keywords');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


app.use(logger);

app.use('/keywords',keywordsRouter);

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});