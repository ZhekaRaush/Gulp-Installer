// Подключение основного модуля GULP
const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');

// Плагины
// Обработка HTML подключение HTML файлов
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const pugs = require('gulp-pug');

// Модули
// Обработка HTML
const html = (cb) => {
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
        .pipe(dest('./public'))
        .pipe(browserSync.stream());
};

// Обработка PUG
const pug = (cb) => {
    console.log('Обработка PUG <=======================================>');
    return src('./src/pug/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title:"Pug",
                message:error.message
            }))
        }))
        .pipe(pugs({
            pretty: true,
            data: {
                news: require('./data/news.json')
            }
        }))
        .pipe(dest('./public'))
        .pipe(browserSync.stream());
};

// Удаление Директорий
const clear = () => {
    return del('./public');
};

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
};

// Наблюдение
const watcher = () => {
    watch('./src/html/**/*.html', html);
    watch('./src/pug/**/*.pug', pug);
};

// Задачи
exports.html = html;
exports.pug = pug;
exports.watcher = watcher;
exports.clear = clear;

// Сборка проекта
exports.dev = series(
    clear,
    pug,
    parallel(watcher, server)
);