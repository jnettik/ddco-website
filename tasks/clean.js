/**
 * @file
 * Gulp tasks for cleaning out compiled files.
 */

const paths = require('../config').paths;

const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');

/**
 * Deletes files and folders passed in as a glob.
 */
let clean = function(globs) {
  return del(globs).then((paths) => {
    gutil.log(`Removed ${paths.length} folders or files.`);
  });
}

gulp.task('clean:html', () => {
  return clean([
    `${paths.build}/**`,
    `!${paths.build}`,
    `!${paths.assets}`,
    `!${paths.styleguide.build}`
  ]);
});

gulp.task('clean:css', () => { return clean(paths.css.build); });

gulp.task('clean:js', () => { return clean(paths.js.build); });

gulp.task('clean:styleguide', () => { return clean(paths.styleguide.build); });
