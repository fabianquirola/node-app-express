const config = require('config');
const mongoose = require('mongoose');


const {uri,options} = config.get('database');

const connect = () =>{
    mongoose.connect(
        uri,options
    );
    const conn = mongoose.connection;
    conn.on('error',error =>{
        console.log('Error trying to connect to the db...',error);
    });
    conn.on('open',error=>{
        console.log('DB Connection is ready...');
    });

}




module.exports = {connect};