// Generated by CoffeeScript 1.6.3
var Index;

(require('source-map-support')).install({
  handleUncaughtExceptions: false
});

module.exports = new (Index = (function() {
  function Index() {}

  Index.prototype.polvo = true;

  Index.prototype.type = 'js';

  Index.prototype.name = 'javascript';

  Index.prototype.ext = /\.js$/m;

  Index.prototype.exts = ['.js'];

  Index.prototype.compile = function(filepath, source, debug, done) {
    return done(source, null);
  };

  return Index;

})());
