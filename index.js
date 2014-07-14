/**
 * The entry point of the npm module.
 */

var requirejs = require('requirejs');
var mpRequire = requirejs.config({
    context: 'grape-multiplayer',
    baseUrl: __dirname + '/' + 'js/multiplayer'
});
module.exports = mpRequire('server');