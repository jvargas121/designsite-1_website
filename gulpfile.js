const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1. Find my CSS File
    return gulp.src('./scss/**/*.scss')
    //2. Pass it through the SASS Compiler
    .pipe(sass().on('error', sass.logError))
    //3. Where is my compiled CSS?
    .pipe(gulp.dest('./css'))
    //4. Stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./**/*html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;