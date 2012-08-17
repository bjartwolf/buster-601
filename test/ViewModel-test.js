"use strict";
buster.testCase("The ViewModel", {
    "should have one element when initialized": function () {
        var vm = new TaskListViewModel();
        assert.same(vm.tasks().length, 1);
    },
    "should call save when save command is called": function () {
        var vm = new TaskListViewModel();
        services.save = this.spy();
        vm.save();
        assert.calledOnce(services.save);
    }
});
