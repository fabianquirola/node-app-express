const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../users/model');

const SECRET_KEY = 'SECRET_KEY';
const HASH_SALT = 10;
const TOKEN_EXPIRES_IN = '2h';

async function isLoggedIn(req,res,next){
    const auth = req.headers['authorization'];
    if(!auth){
        res.status(401).end();
    }
    try {
        const bearer = auth.split(' ');
        const token = bearer[1]; //bearer identificar que en el token puede llegar a ser sensible
        const payload = jwt.verify(token,SECRET_KEY);
        const user = User.findById(payload._id);
        req.user = user;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send('Invalid Token');
    }
   
}
function createToken(user){
    const payload = {
        _id : user._id,
        email:user.email
    };

    return jwt.sign(payload,'SECRET_KEY',{expiresIn:TOKEN_EXPIRES_IN});
}
async function createHash(text){
    return await bcrypt.hash(user.password,HASH_SALT);
}

async function compareHash(text,hash){
    return await bcrypt.compare(text,hash);
}

module.exports = {
    isLoggedIn,
    createToken,
    createHash,
    compareHash
}