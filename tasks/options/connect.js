'use strict';

var liveReload = require('connect-livereload');
var LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35730;
var serveStatic = require('serve-static');
var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
var history = require('connect-history-api-fallback');

module.exports = {
  livereload: {
    options: {
      base: 'dist/<%= pkg.version %>/',
      logger: 'dev',
      middleware: function (connect, options) {
        var middlewares = [liveReload({port: LIVERELOAD_PORT}),
                           history({}),
                           proxy];
        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base));
        });
        return middlewares;
      },
      livereload: LIVERELOAD_PORT,
      debug: true,
      keepalive: true
    },
    proxies: [
     
    ]
  }
};
