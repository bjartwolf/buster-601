"use strict";
buster.testCase("The ViewModel", {
    "should have one element when initialized": function () {
        var vm = new TaskListViewModel();
        assert.same(vm.tasks().length, 1);
    }
});
