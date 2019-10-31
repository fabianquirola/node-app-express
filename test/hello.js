const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.should();

//archivo de prueba por modulo

describe('hello',()=>{
    it(' should hello',()=>{
        const foo = "bar";
        foo.should.equal('bar');
        expect(foo).to.be.a('string');
        assert.lengthOf(foo,3);
    })
});