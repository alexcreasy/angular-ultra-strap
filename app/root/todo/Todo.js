(function() {
  'use strict';

  angular
    .module('root.todo')
    .factory('Todo', todoFactory);

  function todoFactory() {
    return Todo;
  }

  function Todo(label) {
    var self = this;

    var thisLabel,
        done;

    if (angular.isUndefined(label)) {
      throw new Error('Undefined param label');
    }

    thisLabel = label;
    done = false;

    self.getLabel = function () {
      return thisLabel;
    };

    self.isDone = function () {
      return done;
    };
  }

})();
