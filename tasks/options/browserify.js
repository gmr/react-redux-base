'use strict';

module.exports = {
  app: {
    files: {
      'build/app.js': ['src/js/index.js']
    },
    options: {
      transform: [['babelify', {presets: ['es2015', 'react', 'stage-2']}]]
    }
  }
};
