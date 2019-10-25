const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const app = express();

const database = require('./database');

middleware(app);

routes(app);

database.connect();


app.listen(3000,()=>{
    console.log('http://localhost:3000');
});