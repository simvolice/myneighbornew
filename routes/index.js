
module.exports = function (app) {
    app.use('/', require('./authrouter'));
    app.use('/', require('./testrouter'));
    app.use('/', require('./mysosedrouter'));
};