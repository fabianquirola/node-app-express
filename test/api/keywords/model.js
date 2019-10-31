const chai = require('chai');
const config = require('config');
const {MongoMemoryServer} = require('mongodb-memory-server');
const mongoose = require('mongoose');
const expect = chai.expect;
const assert = chai.assert;
chai.should();

describe('api/keywords/model',()=>{
    const mongoServer = new MongoMemoryServer;
    
const {uri,options} = config.get('database');

    before(async ()=>{
        const uri = await mongoServer.getConnectionString();
        console.log('MONGODB_URI',uri);
        await mongoose.connect(uri,options);
    })
    after(async ()=>{
        await mongoose.disconnect();
        await mongoServer.stop;
    })

    it('should create a keyword',()=>{

        expect(true).to.be.true;
        

    });

})