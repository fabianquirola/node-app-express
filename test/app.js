const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const {MongoMemoryServer} = require('mongodb-memory-server');
const expect = chai.expect;
const assert = chai.assert;
const keyword = require('../api/keywords/model');

chai.use(chaiHttp);
chai.should();

describe.only('index',async ()=>{
    let mongoServer;

    before(async()=>{
        mongoServer = new MongoMemoryServer({
            instance: {
                ip:'localhost',
                port:27017,
                dbName: 'nodeapp'
            }
        })
        const uri = await mongoServer.getConnectionString();
        console.log('MONGODB_URI',uri);

    });

    after(async ()=>{
        //await mongoose.disconnect();
        await mongoServer.stop();
    });
    beforeEach(async()=>{
        await keyword.deleteMany();
        const k1 = {name:'k1',desc:'d2',url:'ui'};
        const k2 = {name:'k2',desc:'d2',url:'ui'};
        await keyword.create(k1,k2);
       // scriptKeywords();
       // scriptUsers();
       // scriptTodos();

    })
    

    it('should return all the keywords',async ()=>{
        const res = await chai.request(app)
        .get('/api/keywords');
        expect(res.body).to.be.a('array');
        expect(res.body.length).to.equal(2);

    })
})

//only
//skipe