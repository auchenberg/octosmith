var cons = require('consolidate')
var tinyliquid = require('tinyliquid')
var YAML = require('yamljs')

var config = YAML.load('./_config.yml');


function plugin() {
  return function(files, metalsmith, done){
    
    metalsmith.metadata
    done()
  };
}

module.exports = plugin
