/* jshint node: true */
'use strict';

var Addon = require('ember-cli/lib/models/addon');

function _findHost(that) {
  var app = that.app;
  var parent = that.parent;
  while (parent.parent) {
    if (parent.app) {
      app = parent.app;
      break;
    }

    parent = parent.parent;
  }
  return app;
}

if (!Addon.prototype.import) {
  Addon.prototype.import = function(asset, options) {
    var app = _findHost(this);
    app.import(asset, options);
  };
}

module.exports = {
  name: 'ember-cli-import-polyfill'
};
