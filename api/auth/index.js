const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../users/model');

const {secretKey,tokenExpiresIn} = config.get('auth');


async function isLoggedIn(req,res,next){
    const auth = req.headers['authorization'];
    if(!auth){
        res.status(401).end();
    }
    try {
        const bearer = auth.split(' ');
        const token = bearer[1]; //bearer identificar que en el token puede llegar a ser sensible
        const payload = jwt.verify(token,secretKey);
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

    return jwt.sign(payload,'SECRET_KEY',{expiresIn:tokenExpiresIn});
}


module.exports = {
    isLoggedIn,
    createToken
}