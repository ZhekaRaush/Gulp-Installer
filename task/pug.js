// Подключение основного модуля GULP
const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Плагин
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');

const pug = () => {
    console.log('Обработка PUG <=======================================>');
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title:"Pug",
                message:error.message
            }))
        }))
        .pipe(pugs(app.pug))
        .pipe(dest(path.pug.dest));
};
module.exports = pug;