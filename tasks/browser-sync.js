/**
 * @file
 * Gulp task that runs the local browser-sync server.
 */
const config = require('../config').browser_sync;
const paths = require('../config').paths.browserSync;

const gulp = require('gulp');
const browserSync = require('browser-sync').create(config.instanceName);

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: paths.app
    }
  });
});
