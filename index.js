const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const app = express();

const database = require('./database');

app.set('view engine','ejs');

app.get('/about',(req,res)=>{
    res.render('about',
    {
        message:'Hello EJS',
        values:['node','javascript','ejs']
})
})

middleware(app);

routes(app);

database.connect();


app.listen(3000,()=>{
    console.log('http://localhost:3000');
});