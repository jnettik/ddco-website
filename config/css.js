/**
 * @file
 * Configuration for site CSS compilation.
 */

const config = {};

// Sass config
// @todo
// Maybe we get Eyeglass working to load these with?
config.options = {
  includePaths: [
    './node_modules/breakpoint-sass/stylesheets'
  ]
};

// Post CSS plugins config
config.cssnext = {
  'browsers': [
    'last 2 versions',
    'ie >= 8',
    'ios >= 7'
  ]
};

module.exports = config;
