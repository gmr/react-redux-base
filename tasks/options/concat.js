'use strict';

module.exports = {
  app: {
    src: [
      'build/App.js'
    ],
    dest: 'dist/<%= pkg.version %>/index.js'
  }
};
