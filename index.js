var jsx = require('jsx-transform');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var sourceFilename = loaderUtils.getRemainingRequest(this);
  var current = loaderUtils.getCurrentRequest(this);
  var query = loaderUtils.parseQuery(this.query);

  var result = jsx.fromString(source, {
    factory: query.factory || 'ngx'
  });
  
  this.callback(null, result, null);
};
