const keywords = require('./model');

async function search(){
    return await keywords.find();
}


module.exports = {
    search
}