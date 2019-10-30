const User = require('./model');
const bcrypt = require('bcrypt');
const {createToken} = require('../auth');
const {createHash,compareHash} = require('../crypt');
const search = async (req,res)=>{
    /*User.find()
    .then(User=> res.send(User))
    .catch(err=> res.status(500).send(err));
    */

    //es lo mismo //

        try {
            const response = await User.find();
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }

    };


const create = async (req,res)=>{
        
        try {
            const obj = req.body;
            const response = await User.create(obj);
            
            res.status(201).send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
 
    };

const readById = async (req,res)=>{
        const id = req.params.id;
        //const User = ['nodejs','express','javascript','react','angular','java','php'];
        try {
            const response = await User.findById(id);
            res.send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }
    
        
    };
const update = async(req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        //const obj = User.find(obj => obj.id === idp);
        
        try {
            const response = await User.findByIdAndUpdate(idp,objb);
            res.status(204).send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }

    };
const remove = async (req,res)=>{
        const idp = req.params.id;
        try {
            const response = await User.findByIdAndDelete(idp);
            res.send(204).send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }
    
      
    };

const login = async (req,res)=>{
       
        try {
            //const obj = req.body;
            const {password,email} = req.body
            if(!email){
                res.status(400).send('email is required');
            }
            if(!password){
                res.status(400).send('password is required');
            }

            const user = await User.findOne({email}).select(['email','password']);
            //const hashedPassword = await bcrypt.hash(password,10);
            if(!user){
                res.status(400).send('Invalid email or password');
            }

            const verify = await compareHash(password,user.password);

            if(!verify){
                res.status(400).send('Invalid email or password');
            }


            const token = createToken(user);

            res.send({token});

            
           // res.status(201).send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    
      
    };

    

module.exports = {
    search,
    create,
    readById,
    update,
    remove,
    login
}