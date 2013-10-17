// Generated by LiveScript 1.2.0
/* Adapted by Elizabeth Marston from npm://wintersmith-stylus, which in turn is by Jon Wong. (c) 2013 MIT License */
var async, fs, ls;
async = require('async');
fs = require('fs');
ls = require('LiveScript');
module.exports = function(env, done){
  var Wsls;
  Wsls = (function(superclass){
    var prototype = extend$((import$(Wsls, superclass).displayName = 'Wsls', Wsls), superclass).prototype, constructor = Wsls;
    function Wsls(filepath, text){
      this.filepath = filepath;
      this.text = text;
    }
    prototype.getFilename = function(){
      return this.filepath.relative.replace(/ls$/, 'js');
    };
    prototype.getView = function(){
      return function(env, locals, contents, templates, callback){
        var e;
        try {
          this.text = ls.compile(this.text);
          return callback(null, new Buffer(this.text));
        } catch (e$) {
          e = e$;
          return callback(e);
        }
      };
    };
    Wsls.fromFile = function(filepath, callback){
      return fs.readFile(filepath.full, function(e, r){
        if (e) {
          return callback(e);
        } else {
          return callback(null, new Wsls(filepath, r.toString()));
        }
      });
    };
    return Wsls;
  }(env.ContentPlugin));
  env.registerContentPlugin('scripts', '**/*.ls', Wsls);
  return done();
};
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}