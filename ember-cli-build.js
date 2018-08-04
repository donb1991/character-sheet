'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    orbit: {
      packages: [
        '@orbit/indexeddb',
        '@orbit/indexeddb-bucket',
      ]
    }
  });
  return app.toTree();
};
