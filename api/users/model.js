const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    name: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true,select:false},
});

schema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    const hashedPassword = await bcrypt.hash(user.password,10);
    user.password = hashedPassword;
    next();
})

schema.post('save',async function(){
    const user = this;
    user.password = undefined;
})

const User = mongoose.model('User',schema);

module.exports = User;