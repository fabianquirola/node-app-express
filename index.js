const express = require('express');
const logger = require('./logger');


const app = express();

app.use(logger);

app.use(express.static('public'));

/*app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
});
*/
app.get('/keywords',(req,res)=>{
    const keywords = ['nodejs','express'];
    res.send(keywords);
});

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});