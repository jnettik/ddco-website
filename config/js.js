
/**
 * @file
 * Config for the site Javascript compile tasks.
 */

const config = {};

//
// Additional paths browserify should check for plugins.
config.paths = [
  __dirname + '/../node_modules'
];

//
// Browserify plugins.
config.plugins = [];

// Configure mappings of global objects.
config.expose = {};

//
// Transpiling config.
config.babelify = {};

config.babelify.presets = [].map(require.resolve);

config.babelify.plugins = [].map(require.resolve);

module.exports = config;
