// Подключение основного модуля GULP
const { src, dest } = require('gulp');

// Модули
// Обработка HTML
const html = (cb) => {
    console.log('Обработка HTML');
    return src('./src/html/*.html')
        .pipe(dest('./public'));
};

// Задачи
exports.html = html;