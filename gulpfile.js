// Подключение основного модуля GULP
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
// Конфигурация
const path = require('./config/path.js');

// Удаление директорий
const clear = require('./task/clear.js');
// Обработчик HTML
const html = require('./task/html.js');
// Обработчик PUG
const pug = require('./task/pug.js');
// Обработчик CSS
const css = require('./task/css.js');
// Обработчик SCSS
const scss = require('./task/scss.js');
// Обработчик JavaScript
const js = require('./task/js.js');
// Обработчик Изображений
const img = require('./task/img.js');


// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
};

// Наблюдение
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.pug.watch, pug).on("all", browserSync.reload);
    watch(path.css.watch, css).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
};

// Задачи
exports.html = html;
exports.pug = pug;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;

// Сборка проекта
exports.dev = series(
    clear,
    parallel(html, scss, js, img),
    parallel(watcher, server)
);