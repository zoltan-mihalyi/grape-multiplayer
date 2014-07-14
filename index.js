/**
 * The entry point of the npm module.
 */

var requirejs = require('requirejs');
requirejs.config({
    baseUrl: __dirname + '/' + 'js/multiplayer'
});
module.exports = requirejs('main');