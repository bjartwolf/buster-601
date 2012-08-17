(function () {
    window = window || {};
    window.services = window.services || {};
    window.services.load = function (callback) {
        callback([new Task({'title': 'testtitle', 'isDone': false})]);
    };    
    window.services.save= function (callback) {
        callback("ok");
    };    
}());
