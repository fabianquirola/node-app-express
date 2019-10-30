const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const app = express();

const database = require('./database');

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST || 'localhost';



middleware(app);

routes(app);

database.connect();


app.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
});