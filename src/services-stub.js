var MYAPP = MYAPP || {};
(function () {
    "use strict";
    MYAPP.services = MYAPP.services || {};
    MYAPP.services.load = function (callback) {
        callback(null, [new Task({'title': 'testtitle', 'isDone': false})]);
    };
    MYAPP.services.save = function (data, callback) {
        callback(null, "saved data: " + data);
    };
}());
