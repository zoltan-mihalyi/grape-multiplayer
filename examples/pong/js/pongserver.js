require(['grape', 'mapper', 'resources', 'scenes', 'multiplayer'], function (Grape, Mapper, Resources, Scenes, Multiplayer) {
    'use strict';

    var PongServer = Grape.Class('PongServer', Multiplayer.Server, {
        'event connection': function (user) {
            var users, i;
            user.addTag('WAITING');
            users = this.getUsers('WAITING');
            if (users.length === 2) {
                for (i = 0; i < users.length; i++) {
                    users[i].removeTag('WAITING');
                }
                var game = this.startGame({
                    scene: 'GameScene',
                    sceneParameters: {
                        bla: 1
                    },
                    users: users
                });
                game.scene.leftBat.setControllable(users[0]); //todo set timeout before start
                game.scene.rightBat.setControllable(users[1]);
            }
        }
    });

    //START SERVER
    console.log('LOADING RESOURCES...');
    Resources.load(function () {
        new PongServer({port: 5000, mapper: Mapper, server: true});
        console.log('SERVER STARTED');
    });
});