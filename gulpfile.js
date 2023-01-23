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
};

// Задачи
exports.html = html;
exports.watcher = watcher;
exports.clear = clear;

// Сборка проекта
exports.dev = series(
    html,
    parallel(watcher, server)
);