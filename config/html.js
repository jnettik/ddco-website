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
  articles: {
    pattern: 'articles/*.md',
    sortby: 'post_date',
    metadata: {
      view: 'article.twig'
    }
  },
  profiles: {
    pattern: 'profiles/*.md',
    metadata: {
      permalink: false
    }
  },
  services: {
    pattern: 'services/*.md'
  }
}

config.permalinks = {
  pattern: ':permalink',
  linksets: [{
    match: { collection: 'articles' },
    pattern: 'blog/:title'
  }, {
    match: { collection: 'services' },
    pattern: 'services/:title'
  }]
};

config.twig = {
  directory: '../presenters',
  cache: false
};

module.exports = config;
