/**
 * Created by Nikita on 16.01.2017.
 */

var chai = require('chai');


var assert = chai.assert;
var expect = chai.expect;


var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const objParams = {
    email: 'pauk_1996@mail.ru',
    pass: 'FullPass!1'
};


describe('Тестируем api /register', function() {

    it('Хотим проверить свойства code', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .post('/register')
            .field('email', objParams.email)
            .field('pass', objParams.pass)
            .end(function(err, res) {
                expect(res.body).to.have.property("code");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});
describe('Тестируем api /login', function() {

    it('Хотим проверить свойства code и token', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .post('/login')
            .field('email', objParams.email)
            .field('pass', objParams.pass)
            .end(function(err, res) {
                expect(res.body).to.have.property("code").and.to.have.property("token");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});
describe('Тестируем api /verifemail', function() {

    it('Хотим проверить свойства code и token', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .get('/login')
            .end(function(err, res) {


                expect(res.body).to.have.property("count");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});
describe('Тестируем api /resetpass', function() {

    it('Хотим проверить свойства code и token', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .get('/login')
            .end(function(err, res) {


                expect(res.body).to.have.property("count");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});
describe('Тестируем api /veriftoken', function() {

    it('Хотим проверить свойства code и token', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .get('/login')
            .end(function(err, res) {


                expect(res.body).to.have.property("count");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});
describe('Тестируем api /setnewpass', function() {

    it('Хотим проверить свойства code и token', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .get('/login')
            .end(function(err, res) {


                expect(res.body).to.have.property("count");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});




