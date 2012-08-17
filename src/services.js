(function () {
    window.services = window.services || {};
    services.load = function (callback) {
        $.getJSON("http://localhost:1337/tasks", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        callback(mappedTasks);
        });    
    }
}());
