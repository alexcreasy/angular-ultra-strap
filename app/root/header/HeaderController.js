(function() {
  'use strict';

  angular
    .module('root.header')
    .controller('HeaderController', HeaderController);

  function HeaderController() {
    var vm = this;

    vm.topLevelStates = [
      {
        name: 'Home',
        sref: 'root.home'
      },
      {
        name: 'Todo List',
        sref: 'root.todo'
      }
    ];
  }
})();
