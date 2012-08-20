"use strict";
buster.testCase("The ViewModel", {
    "setUp": function () {
        this.vm = new TaskListViewModel();
    },
    "should have one element when initialized": function () {
        assert.same(this.vm.tasks().length, 1);
    },
    "should call save when save command is called": function () {
        MYAPP.services.save = this.spy();
        this.vm.save();
        assert.calledOnce(MYAPP.services.save);
    }
});
