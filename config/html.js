/**
 * @file
 * Config file containing config for site HTML.
 */

const config = {};

config.metadata = {};
config.metadata.sitename = "Dearly Design Co.";
config.metadata.description = "[description]";

config.collections = {
  posts: {
    pattern: 'posts/**/*.md',
    sortBy: 'date',
    reverse: true
  }
}

config.permalinks = {
  pattern: 'blog/:title'
};

config.twig = {
  directory: '../presenters',
  cache: false
};

module.exports = config;
