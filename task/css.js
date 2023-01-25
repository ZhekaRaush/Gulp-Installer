// Подключение основного модуля GULP
const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Плагин
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

const css = () => {
    console.log('Обработка CSS <=======================================>');
    return src(path.css.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title:"CSS",
                message:error.message
            }))
        }))
        .pipe(concat('style.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: 'style.css' }))
        .pipe(dest(path.css.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(size({ title: 'style.min.css' }))
        .pipe(dest(path.css.dest, { sourcemaps: true }));
};
module.exports = css;