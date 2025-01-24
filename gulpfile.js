// Основной модуль
import gulp from "gulp";
// Импорт путей
import {path} from "./gulp/config/path.js";
// Импортируем плагины
import {plugins} from "./gulp/config/plugins.js";
// Импорт задач
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js-file.js";
import {images} from "./gulp/tasks/images.js"
import {otfToTtf, ttfToWoff} from "./gulp/tasks/fonts.js"

// Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

//Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images));

// Построение сценариев виполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);
