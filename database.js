const mongoose = require('mongoose');
const connect = () =>{
    mongoose.connect(
        'mongodb://localhost:27017/data',
        {useNewUrlParser:true,poolSize:10}
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