// Подключение основного модуля GULP
const { src, dest } = require('gulp');
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const html = () => {
    console.log('Обработка HTML <=======================================>');
    return src('./src/html/*.html')
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
        .pipe(dest('./public'));
};
module.exports = html;