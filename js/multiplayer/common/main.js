define(['./controllable', './keywords', './mapper','./synchronized'], function (Controllable, keywords, Mapper, Synchronized) {
    return Grape.Multiplayer = {
        Controllable: Controllable,
        Mapper: Mapper,
        Synchronized: Synchronized
    };
});