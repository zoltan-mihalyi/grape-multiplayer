define(['./client/main', './common/main', './server/main'], function (Client, Common, Server) {
    /*global Grape*/
    Grape.Utils.extend(Common, Client);
    Grape.Utils.extend(Common, Server);

    return Common;
});