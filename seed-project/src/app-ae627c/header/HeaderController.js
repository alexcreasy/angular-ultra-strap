(function() {
  'use strict';

  angular
    .module('app-ae627c.header')
    .controller('HeaderController', HeaderController);

  function HeaderController() {
    var vm = this;

    vm.topLevelStates = [
      {
        name: 'Home',
        sref: 'app-ae627c.home'
      },
      {
        name: 'Todo List',
        sref: 'app-ae627c.todo'
      }
    ];
  }
})();
