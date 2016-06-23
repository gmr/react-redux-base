'use strict';

module.exports = function(grunt) {

  var config = {
    pkg: grunt.file.readJSON('./package.json'),
    env: process.env
  };

  require('jit-grunt')(grunt, {
    configureProxies: 'grunt-connect-proxy'
  });

  require('time-grunt')(grunt);

  // Load task options from tasks/options
  function loadConfig(path) {
    var glob = require('glob'),
        obj = {};

    glob.sync('*', { cwd: path }).forEach(function(option) {
      var key = option.replace(/\.js$/, ''),
          conf = require(path + option);
      if (typeof conf === 'function') { conf = conf(grunt); }
      obj[key] = conf;
    });

    return obj;
  }

  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  grunt.initConfig(config);
  grunt.loadTasks('tasks');
};
