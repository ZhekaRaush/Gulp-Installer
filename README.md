# Gulp-Installer
Сборщик проекта на основе сборщика GULP

## Сборка проекта на Gulp 4
Быстрая настройка сборки вашего проекта на Gulp,    
в данный момент сборка поддерживает сборщики:
- HTML, PUG, CSS

## Функционал сборки Gulp-Installer
- компиляция препроцессора PUG
- сжатие и компиляция HTML
- 2 варианта подключения стилей CSS
- style.min.css - сжатый объединенный в 1 файл
- style.css - объединенный в 1 файл без сжатия

## Input
|                |          HTML         |    CSS  |
|:---------------|:---------------------:|:--------|
| **Каталог**    | src/html/ src/pug/    | src/css |
| **Расширение** | .html .pug            | .css    |

## Output
|           |   HTML  |             CSS            |
|:---------:|:-------:|:--------------------------:|
| **Путь**  | public/ | public/css/style.min.css   |

## Зупуск:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: npm i (необходимо перед началом сборки установить node.js)  
4. Необходимо глобально установить GULP-CLI, npm i -g gulp-cli
5. Выполните команду: gulp dev (запуск таска для работы с приложением)  
6. Пишите свой код и наслаждайтесь автоматической сборкой проекта.

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp    
[gulp-file-include](https://www.npmjs.com/package/gulp-file-include) Подключение файлов HTML    
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файлов    
[gulp-pug](https://www.npmjs.com/package/gulp-pug) Pug препроцессор HTML кода    
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов    
[gulp-size](https://www.npmjs.com/package/gulp-size) Отображение информации о размерах файлов в терминале    
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber) Вывод ошибок в виде всплывающей подсказки    
[gulp-notify](https://www.npmjs.com/package/gulp-notify) Настройка для отображения вывода ошибок во всплывающей подсказке    
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов    
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один    
[gulp-cssimport](https://www.npmjs.com/package/gulp-cssimport) Собрка импортированных файлов    
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS    
[gulp-csso](https://www.npmjs.com/package/gulp-csso) Удаляет прабелы и табуляцию    
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы    
[gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) Сокращftn стили в CSS    
[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) Постобработка CSS файлов    