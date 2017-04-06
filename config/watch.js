/**
 * @file
 * Config file for the site watch tasks.
 */

const config = {};

config.base = `${__dirname}/..`;

// HTML watch patterns.
config.html = {};
config.html.paths = [
  `${config.base}/content/**/*.md`,
  `${config.base}/presenters/**/*.twig`
];

// CSS watch patterns.
config.css = {};
config.css.paths = [
  `${config.base}/styleguide/**/*.{scss,sass}`,
  `${config.base}/styleguide/scss/*.{scss,sass}`
];

// Styleguide watch patterns.
config.styleguide = {};
config.styleguide.paths = [
  `${config.base}/styleguide/patterns/**/*.twig`,
  `${config.base}/styleguide/patterns/**/*.yml`
];

module.exports = config;
