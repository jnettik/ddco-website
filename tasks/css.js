/**
 * @file
 * Task that compiles site Sass into CSS.
 */

const config = require('../config').css;
const paths = require('../config').paths.css;
const bsInstanceName = require('../config').browser_sync.instanceName;

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const browserSync = require('browser-sync').get(bsInstanceName);

const plugins = [
  cssnext(config.cssnext)
];

/**
 * CSS task that checks if we're setting up a watcher or a one off compile.
 */
gulp.task('css', ['clean:css'], () => {
  gulp.src(paths.source)
    // Compile Sass files into CSS.
    .pipe(sass(config.options).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.build));

  browserSync.reload()
});
