// Подключение основного модуля GULP
const { src, dest, watch } = require('gulp');

// Плагины
// Обработка HTML подключение HTML файлов
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

// Модули
// Обработка HTML
const html = (cb) => {
    console.log('Обработка HTML <=======================================>');
    return src('./src/html/*.html')
        .pipe(fileinclude())
        .pipe(size({ title: 'До сжатия'}))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({ title: 'После сжатия'}))
        .pipe(dest('./public'));
};

// Наблюдение
const watcher = () => {
    watch('./src/html/**/*.html', html);
};

// Задачи
exports.html = html;
exports.watcher = watcher;