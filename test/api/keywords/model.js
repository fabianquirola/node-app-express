const chai = require('chai');
const config = require('config');
const {MongoMemoryServer} = require('mongodb-memory-server');
const mongoose = require('mongoose');
const expect = chai.expect;
const assert = chai.assert;
const keyword = require('../../../api/keywords/model')
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

    beforeEach(async ()=>{
        await keyword.deleteMany();
    })

    it('should create a keyword',async()=>{
        const newKeyword = {
            name: 'hello',
            desc: 'fake-desk',
            url: 'fake-url'
        };
        const persistedKeyword = await keyword.create(newKeyword)
        expect(persistedKeyword).to.have.property('_id');
        expect(persistedKeyword).to.have.property('__v');
        expect(persistedKeyword).to.have.property('name')
        .to.equal(newKeyword.name);
        expect(persistedKeyword).to.have.property('desc')
        .to.equal(newKeyword.desc);
        expect(persistedKeyword).to.have.property('url')
        .to.equal(newKeyword.url);
        expect(true).to.be.true;

        const count = await keyword.countDocuments();
        expect(count).to.equal(1);
        

    });

    it('should throw and error if no name',async ()=>{
        let hasError = false;
       try {
        await keyword.create({
            desc:'fake-desk',
            url:'fake-url'
        })
       } catch (error) {
           hasError = true;
           expect(error.name).to.equal('ValidationError');
           expect(error.errors).to.have.property('name')
       }
       expect(hasError,'ValidationError must be thrown').to.be.true;
       
    });

});