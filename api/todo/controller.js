const todo = require('./model');
const Service = require('./service');

const search = async (req,res)=>{

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
            const response = await todo.create(obj);
            res.status(201).send(response);
        } catch (error) {
            res.status(500).send(error);
        }
 
    };
const readById = async (req,res)=>{
        const id = req.params.id;
        //const todo = ['nodejs','express','javascript','react','angular','java','php'];
        try {
            const response = await todo.findById(id);
            res.send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }    
    };
const update = async(req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        //const obj = todo.find(obj => obj.id === idp);
        
        try {
            const response = await todo.findByIdAndUpdate(idp,objb);
            res.status(204).send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }

    };
const remove = async (req,res)=>{
        const idp = req.params.id;
        try {
            const response = await todo.findByIdAndDelete(idp);
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