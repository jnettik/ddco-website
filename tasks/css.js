/**
 * @file
 * Task that compiles site Sass into CSS.
 */

const config = require('../config').css;
const paths = require('../config').paths.css;

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');

const plugins = [
  cssnext(config.cssnext)
];

/**
 * CSS task that checks if we're setting up a watcher or a one off compile.
 */
gulp.task('css', ['clean:css'], () => {
  return gulp.src(paths.source)
    // Compile Sass files into CSS.
    .pipe(sass(config.options).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.build));
});
