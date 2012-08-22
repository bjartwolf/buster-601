"use strict";

function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.services = MYAPP.services;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function () {
        return ko.utils.arrayFilter(self.tasks(), function (task) { return !task.isDone(); });
    });

    // Operations
    self.addTask = function () {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function (task) {
        self.tasks.remove(task);
    };

    self.save = function () {
        self.services.save(self.tasks(), function (err, result) {
            if (err) {
                console.log("Some error occured: " + err);
                throw "Application crashed";
            }
            console.log(result);
        });
    };

    self.load = function () {
        self.services.load(function (err, mappedTasks) {
            if (err) {
                console.log("Some error occured: " + err);
                throw "Application crashed";
            }
            self.tasks(mappedTasks);
        });
    };

    self.load();
}
