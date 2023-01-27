<p align="center">
  <a href="https://github.com/ZhekaRaush/Gulp-Installer">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center">Gulp-Installer - cборка проекта на Gulp 4</p>
</p>

# Gulp-Installer
Сборщик проекта на основе сборщика GULP

## Gulp-Installer - сборщик проекта на базе Gulp 4
Быстрая настройка сборки вашего проекта на Gulp,    
в данный момент Gulp-Installer сборщик поддерживает следующие типы файлов:
- HTML, PUG    
- CSS, SCSS, SASS    
- JavaScript    
- PNG, JPG, JPEG GIF SVG    

## Функционал сборки Gulp-Installer
- компиляция препроцессора PUG
- сжатие и компиляция HTML
- 2 варианта подключения стилей CSS
- style.min.css - сжатый объединенный в 1 файл
- style.css - объединенный в 1 файл без сжатия
- компиляция препроцессоров SASS, SCSS
- преобразования кода ECMAScript 2015 и обратно совместимую версию JavaScript с помощью Babel
- сжатый объединенный в 1 файл JavaScript
- сжатие изображений, поддержка и преобразование файлов с расширением WEBP
- отслеживание новых изображений, которые еще не были сжаты
- отслеживание изменений в файлах и автоматический запуск повторной обработки

## Input
|                |      HTML PUG         |   CSS SCSS SASS  |    JS     |             IMG           |
|:---------------|:---------------------:|:----------------:|:---------:|:-------------------------:|
| **Каталог**    | src/html/ src/pug/    | src/css src/scss | src/js    | src/img                   |
| **Расширение** | .html .pug            | .css .scss .sass | .js       | .png .jpg .jpeg .gif .svg |

## Output
|           |   HTML  |             CSS            |          JS          |     IMG     |
|:---------:|:-------:|:--------------------------:|:--------------------:|:-----------:|
| **Путь**  | public/ | public/css/style.min.css   | public/css/script.js | public/img/ |

## Зупуск Gulp-Installer:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: `npm i` (необходимо перед началом сборки установить node.js и Visual Studio Code)  
4. Необходимо глобально установить GULP-CLI, `npm i -g gulp-cli`
5. Выполните в терминале: `gulp dev` (запустится таск для работы с приложением)  
6. Пишите свой код и наслаждайтесь автоматической сборкой проекта.  

## Используемые NPM пакеты и ссылки на документацию
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
[gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) Сокращает стили в CSS    
[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) Постобработка CSS файлов    
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов    
[sass](https://www.npmjs.com/package/sass) Компилятор Sass    
[gulp-sass-glob](https://www.npmjs.com/package/gulp-sass-glob) Импорт всех файлов из указанной директории    
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует JavaScript в старый стандарт    
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel    
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel    
[webpack](https://www.npmjs.com/package/webpack) Cборщик модулей, основная цель — объединить файлы JavaScript    
[webpack-stream](https://www.npmjs.com/package/webpack-stream) Нужен для удобной интеграции с GULP    
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживает только новые файлы    
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжимает изображения     
[gulp-webp](https://www.npmjs.com/package/gulp-webp) Конветирует изображения в формат WEBP    
[gulp-webp-css](https://www.npmjs.com/package/gulp-webp-css) 
[gulp-webp-html](https://www.npmjs.com/package/gulp-webp-html) Автоматическое преобразование изображений, заключённых в теге HTML в формат WEBP    
[gulp-webp-css](https://www.npmjs.com/package/gulp-webp-css) То же самое только c CSS файлами    


### Автору на кофе
![Сбер VISA](https://github.com/ZhekaRaush/Gulp-Installer/blob/main/src/img/sber.jpg)

### Контакты
[![Telegram](https://github.com/ZhekaRaush/Gulp-Installer/blob/main/src/img/telegram.webp)](https://t.me/ZhekaRaush)
[![VK](https://github.com/ZhekaRaush/Gulp-Installer/blob/main/src/img/vk.png)](https://vk.com/id528175475)
[![GitHub](https://github.com/ZhekaRaush/Gulp-Installer/blob/main/src/img/github.webp)](https://github.com/ZhekaRaush)