var requirejs = require('requirejs');

requirejs.config({
    baseUrl: '../../js/multiplayer',
    paths: {
        multiplayer: 'server'
    }
});
requirejs(['grape-engine'], function (Grape) {
    requirejs(['multiplayer'], function () {
        requirejs.config({
            baseUrl: './js'
        });
        requirejs.define('grape', [], function () {
            return Grape;
        });
        requirejs(['pongserver'], function () {
        });
    });
});