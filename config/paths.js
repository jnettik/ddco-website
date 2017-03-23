/**
 * @file
 * Config file containing variables for key paths in the system.
 */

const config = {};

//
// Core source and dest files..
config.source = `${__dirname}/..`;
config.build = `${config.source}/build`;
config.assets = `${config.source}/assets`;

//
// Site HTML paths.
config.html = {};
config.html.source = `${config.source}/content`;
config.html.build = `${config.build}`;
config.html.assets = {
  "source": config.assets,
  "destination": `${config.build}/assets`
};

//
// Site CSS paths.
config.css = {};

// Paths for the platform's main theme CSS
config.css.source = `${config.source}/styleguide/scss/*.{scss,sass}`;
config.css.build = `${config.assets}/css`;

//
// Site JS paths.
config.js = {};

// Main theme JS
config.js.source = `${config.source}/styleguide/js/*.js`;
config.js.build = `${config.assets}/js`;

//
// Paths to site SVG files
config.svg = {};

// Main theme SVG
config.svg.source = `${__dirname}/../img/svg`;
config.svg.build = `${config.assets}/imgs/svg`;
config.svg.optionsFile = `${__dirname}/../grunticonOptions.js`;

//
// Paths for styleguide
config.styleguide = {};
config.styleguide.base = `${config.source}/styleguide`;
config.styleguide.components = `${config.styleguide.base}/patterns`;
config.styleguide.docs = `${config.styleguide.base}/docs`;
config.styleguide.build = `${config.build}/styleguide`;
config.styleguide.assets = config.assets;

//
// Paths for BrowserSync
config.browserSync = {};
config.browserSync.app = `${config.build}`;

module.exports = config;
