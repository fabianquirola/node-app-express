const keywords = require('./model');
const Service = require('./service');
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
const search = async (req,res)=>{
    /*keywords.find()
    .then(keywords=> res.send(keywords))
    .catch(err=> res.status(500).send(err));
    */

    //es lo mismo //

        try {
            const response = await Service.search();
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }

    };


const create = async (req,res)=>{
        const obj = req.body;

        try {
            const response = await keywords.create(obj);
            res.status(201).send(response);
        } catch (error) {
            res.status(500).send(error);
        }
 
    };

const readById = async (req,res)=>{
        const id = req.params.id;
        //const keywords = ['nodejs','express','javascript','react','angular','java','php'];
        try {
            const response = await keywords.findById(id);
            res.send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }
    
        
    };
const update = async(req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        //const obj = keywords.find(obj => obj.id === idp);
        
        try {
            const response = await keywords.findByIdAndUpdate(idp,objb);
            res.status(204).send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }

    };
const remove = async (req,res)=>{
        const idp = req.params.id;
        try {
            const response = await keywords.findByIdAndDelete(idp);
            res.send(204).send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }
    
      
    };



module.exports = {
    search,
    create,
    readById,
    update,
    remove
}