"use strict";
buster.testCase("The ViewModel", {
    "should haev zero elements when initialized": function () {
        var vm = new TaskListViewModel();
        assert.same(vm.tasks().length, 0);
    }
});
