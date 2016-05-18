'use strict';

var loaderUtils = require('loader-utils');
var SVGO = require('svgo');
var svgo = new SVGO({
  plugins: [{
    removeTitle: true
  }, {
    removeDimensions: true
  }]
});

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var output = '' + content;

  var query = loaderUtils.parseQuery(this.query);

  if (query && query.remove) {
    for (var i = query.remove.length - 1; i >= 0; i--) {
      var removable = query.remove[i];
      var re = new RegExp(removable, 'gim');
      output = output.replace(re, '');
    }
  }

  svgo.optimize(output, function(result) {
    output = result.data;
  })

  return "module.exports = '" + output + "'";
}