/**
 * Gulp task that watches files for changes and triggers actions.
 */

const config = require('../config').watch;

const gulp = require('gulp');
const watch = require('gulp-watch');
const sequence = require('run-sequence');

gulp.task('watch', () => {
  sequence('css','html','browser-sync', () => {
    watch(config.html.paths, () => { sequence('html'); });
    watch(config.styleguide.paths, () => { sequence('html'); });
    watch(config.css.paths, () => { sequence('css','html') });
  });
});
