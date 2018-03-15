var json_stringify = require('./stringify.js').stringify;
var json_parse     = require('./parse.js');

module.exports = function(options) {
  return  {
	parse: json_parse(options),
	stringify: json_stringify
  }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;
