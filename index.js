/* jshint node: true */
'use strict';

var Addon = require('ember-cli/lib/models/addon');

if (!Addon.prototype.import) {
  Addon.prototype.import = function(asset, options) {
    if (!this.rootApp) {
      var app = this.app;
      while (app.app) {
        app = app.app;
      }
      this.rootApp = app;
    }
    this.rootApp.import(asset, options);
  };
}

module.exports = {
  name: 'ember-cli-import-polyfill'
};
