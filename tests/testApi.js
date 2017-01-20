/**
 * Created by Nikita on 16.01.2017.
 */

var chai = require('chai');


var assert = chai.assert;
var expect = chai.expect;


var chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('Тестируем /register', function() {

    it('Вернется свойство code', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .post('/register')
            .send({email: 'simvolice@gmail.com', pass: '1989aaaAAA@@@'})
            .end(function(err, res) {




                console.log(res.body);

                expect(res.body).to.have.property("code", 1);





                done();                               // <= Call done to signal callback end
            });
    }) ;

});



