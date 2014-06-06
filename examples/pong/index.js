var requirejs = require('requirejs');

requirejs.config({
    baseUrl: '../../js/multiplayer',
    paths: {
        multiplayer: 'server',
        grape: '../../examples/lib/grape.min'
    }
});
requirejs(['grape'], function(){
    requirejs(['multiplayer'], function () {
        requirejs.config({
            baseUrl: './js'
        });
        requirejs(['pongserver'], function () {
        });
    });
});