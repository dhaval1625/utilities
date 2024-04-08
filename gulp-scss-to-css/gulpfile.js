var gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError)) // for minified css
      .pipe(gulp.dest('assets'));   
};

const watch = () => {
    gulp.watch('./scss/*.scss', series(buildStyles));
    gulp.watch(['./scss/*/*.scss'],series(buildStyles));
}

exports.buildStyles = buildStyles;
exports.watch = watch;