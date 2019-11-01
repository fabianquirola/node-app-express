const todo = require('./model');

async function search(){
    return await todo.find();
}


module.exports = {
    search
}