/**
 * @file
 * Config file containing config for site HTML.
 */

const config = {};

config.metadata = {};
config.metadata.sitename = "Dearly Design Co.";
config.metadata.description = "[description]";

config.metadata.extra = {};
config.metadata.extra.files = {
  menus: `${__dirname}/../metadata/menus.yml`
};
config.metadata.extra.config = {
  isExternalSrc: true
};

config.ignore = [
  'README.*',
  'profiles/*.md'
];

config.collections = {
  profiles: 'profiles/*.md',
}

config.permalinks = {
  pattern: 'blog/:title'
};

config.twig = {
  directory: '../presenters',
  cache: false
};

module.exports = config;
