/**
 * Created by Nikita on 16.01.2017.
 */

var chai = require('chai');


var assert = chai.assert;
var expect = chai.expect;
chai.should();

var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var foo = 55;


describe('Тестируем testapi', function() {

    it('Хотим увидеть свойство code', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
            .get('/testapi')
            .end(function(err, res) {

                console.log(res);

                expect(res).to.have.property("code");
                done();                               // <= Call done to signal callback end
            });
    }) ;

});



