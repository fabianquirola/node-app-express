const express = require('express');
const router = express.Router();
const controller = require('./controller');
const jwt = require('jsonwebtoken')

function isLoggedIn(req,res,next){
    const auth = req.headers['authorization'];
    if(!auth){
        res.status(401).end();
    }
    try {
        const bearer = auth.split(' ');
        const token = bearer[1];
        const payload = jwt.verify(token,'SECRET_KEY');
        req.user = payload;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send('Invalid Token');
    }
   
}

router.route('/')
    .get(controller.search)
    .post(isLoggedIn,controller.create);

router.route('/:id')
    .get(controller.readById)
    .put(controller.update)
    .delete(controller.remove);



module.exports = router;