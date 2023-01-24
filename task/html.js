// Подключение основного модуля GULP
const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const html = () => {
    console.log('Обработка HTML <=======================================>');
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title:"HTML",
                message:error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(size({ title: 'До сжатия'}))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({ title: 'После сжатия'}))
        .pipe(dest(path.html.dest));
};
module.exports = html;