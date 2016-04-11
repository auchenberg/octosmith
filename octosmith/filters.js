var cons = require('consolidate')
var tinyliquid = require('tinyliquid')
var YAML = require('yamljs')

var config = YAML.load('./_config.yml');

tinyliquid.filters.strip_slash =function(input) {
	return input
}

tinyliquid.filters.raw_content =function(input) {
	return input
}

tinyliquid.filters.condense_spaces =function(input) {
	return input
}

tinyliquid.filters.excerpt =function(input) {
  return input
}

tinyliquid.filters.has_excerpt =function(input) {
  return true
}

tinyliquid.filters.summary =function(input) {
  return input
}

tinyliquid.filters.raw_content =function(input) {
  return input
}

tinyliquid.filters.cdata_escape =function(input) {
  return input
}

tinyliquid.filters.expand_urls =function(input) {
  return input
}

tinyliquid.filters.truncate =function(input) {
  return input
}

tinyliquid.filters.truncatewords =function(input) {
  return input
}


tinyliquid.filters.condense_spaces =function(input) {
  return input
}

tinyliquid.filters.strip_slash =function(input) {
  return input
}

tinyliquid.filters.shorthand_url =function(input) {
  return input
}

tinyliquid.filters.titlecase =function(input) {
  return input
}

// tinyliquid.Context.onInclude(function (name, callback) {
//   // the first argument is the file name, if the tag is "{% include "abc" %}" then name="abc"
//   // you should resolve the file name firstly
//   // the secode argument is a callback function
//   // 1. read the file
//   fs.readFile(resolveTemplatePath(name), 'utf8', function (err, text) {
//     if (err) return callback(err);
//     // 2. compile the template
//     var ast = tinyliquid.parse(text);
//     // 3. callback
//     callback(null, ast);
//   });
// });

function plugin() {
  return function(files, metalsmith, done){
    done()
  };
}

module.exports = plugin
