const express = require('express');
const logger = require('./logger');


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


app.use(logger);

app.use(express.static('public'));

/*app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
});
*/

let keywords = [
    {
        'id': '01',
        'desc': 'nodejs',
        'url':'http://node.org'
    },
    {
        'id': '02',
        'desc': 'express',
        'url':'http://express.org'
    },
    {
        'id': '03',
        'desc': 'javascript',
        'url':'http://javascript.org'
    },
    {
        'id': '04',
        'desc': 'php',
        'url':'http://php.org'
    },
    {
        'id': '05',
        'desc': 'react',
        'url':'http://react.org'
    },
    {
        'id': '06',
        'desc': 'java',
        'url':'http://java.org'
    },
];

app.get('/keywords',(req,res)=>{
    
    const limit = req.query.limit;
    //const keywords = ['nodejs','express','javascript','react','angular','java','php'];
    
    
    const limitInt = parseInt(limit);

    if (limitInt){
        keywords.splice(limitInt);
        return res.send(keywords);
    }
    //res.send('Enviar Limite');
    res.send(keywords);
});

app.get('/keywords/:id',(req,res)=>{
    
    const id = req.params.id;
    //const keywords = ['nodejs','express','javascript','react','angular','java','php'];
    const obj = keywords.find(obj => obj.id === id);
    if(obj){
        return res.send(obj);
    }
    /*
    if (limitInt){
        keywords.splice(limitInt);
        return res.send(keywords);
    }
    */

    res.status(404).send(`${id} not found`);
});

app.post('/keywords',(req,res)=>{
    
    const obj = req.body;
 
    if(obj){

        keywords.push(obj);
        return res.status(201).send(obj);
    }

    res.status(404).send(`${id} not found`);
});

app.put('/keywords/:id',(req,res)=>{
    
    const idp = req.params.id;
    const objb = req.body;
    const obj = keywords.find(obj => obj.id === idp);
    
    if(obj && objb){
        const index = keywords.findIndex((obj => obj.id == idp));
        console.log(index);
        const {id,desc,url} = objb;
       keywords[index].id = id;
       keywords[index].desc = desc;
       keywords[index].url = url;
        return res.send(keywords);
    }

    res.status(404).send(`${idp} not found`);
});

app.delete('/keywords/:id',(req,res)=>{
    
    const idp = req.params.id;
    const objb = req.body;
    const obj = keywords.find(obj => obj.id === idp);
    if(obj){
        const index = keywords.findIndex((obj => obj.id == idp));
        keywords.splice(index,1);
        //return res.send(keywords);
        return res.status(201).send(keywords);
    }

    res.status(404).send(`${idp} not found`);
});

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});