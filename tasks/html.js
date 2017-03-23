/**
 * @file
 * Task to compile the site.
 */

const config = require('../config').html;
const paths = require('../config').paths;

const gulp = require('gulp');
const Metalsmith = require('metalsmith');
const assets = require('metalsmith-assets');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const twig = require('metalsmith-twig');

gulp.task('html', ['clean:html'], () => {
  Metalsmith(__dirname)
    .metadata(config.metadata)
    .source(paths.html.source)
    .destination(paths.html.build)
    .use(collections(config.collections))
    .use(markdown())
    .use(permalinks(config.permalinks))
    .use(twig(config.twig))
    .use(assets(paths.html.assets))
    .build((err, files) => {
      if (err) { throw err; }
    });
});