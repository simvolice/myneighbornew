/**
 * Здесь настраиваем роутеры, разделяем на файлы
 * @param app
 */
module.exports = function (app) {
    app.use('/', require('./authrouter'));
    app.use('/', require('./testrouter'));
};