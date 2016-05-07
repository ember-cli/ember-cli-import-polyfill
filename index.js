/* jshint node: true */
'use strict';

var Addon = require('ember-cli/lib/models/addon');

if (!Addon.prototype.import) {
  Addon.prototype.import = function(asset, options) {
    var app = this.app;
    while (app.app) {
      app = app.app;
    }
    app.import(asset, options);
  };
}

module.exports = {
  name: 'ember-cli-import-polyfill'
};
