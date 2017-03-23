/**
 * @file
 * Gulp task that compiles the site styleguide.
 */

const config = require('../config').styleguide;
const paths = require('../config').paths.styleguide;
const bsInstanceName = require('../config').browser_sync.instanceName;

const gulp = require('gulp');
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const twig = require('@frctl/twig');
const themeSettings = mandelbrot(config.theme);
const browserSync = require('browser-sync').get(bsInstanceName);
const logger = fractal.cli.console;

// Core Fractal config settings.
fractal.set('project.title', config.sitename);
// Fractal component config.
fractal.components.engine(twig);
fractal.components.set('title', config.componentsTitle);
fractal.components.set('path', paths.components);
fractal.components.set('default.preview', config.preview);
fractal.components.set('ext', '.twig');
// Fractal documentation config.
fractal.docs.set('path', paths.docs);
// Fractal web building config.
fractal.web.set('static.path', paths.assets);
fractal.web.set('builder.dest', paths.build);
fractal.web.theme(themeSettings);

/**
 * Compiles the styleguide out to static files.
 */
gulp.task('styleguide', ['clean:styleguide'], function() {
  // Load Fractal builder.
  const builder = fractal.web.builder();

  builder.on('progress', (completed, total) => {
    logger.update(`Exported ${completed} of ${total} items`, 'info');
  });

  builder.on('error', err => logger.error(err.message));

  return builder.build().then(data => {
    logger.success('Fractal build completed!');
    browserSync.reload();
  });
});
