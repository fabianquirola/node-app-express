const keywords = require('./model');
/*
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
*/
const search = (req,res)=>{
       keywords.find((err,keywords)=>{
           if(err){
               return res.status(500).send(err);
           }
           res.send(keywords);
       })
    };
const create = (req,res)=>{
        const obj = req.body;
        keywords.create(obj,(err,persistedObj)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.send(persistedObj);
        })
 
    };

const readById = (req,res)=>{
        const id = req.params.id;
        //const keywords = ['nodejs','express','javascript','react','angular','java','php'];
        const obj = keywords.find(obj => obj.id === id);
        if(obj){
            return res.send(obj);
        }
    
        res.status(404).send(`${id} not found`);
    };
const update = (req,res)=>{
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
    };
const remove = (req,res)=>{
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
    };



module.exports = {
    search,
    create,
    readById,
    update,
    remove
}