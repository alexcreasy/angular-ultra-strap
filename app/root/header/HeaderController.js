(function() {
  'use strict';

  angular
    .module('root.header')
    .controller('HeaderController', HeaderController);

  function HeaderController($log) {
    var vm = this;

    $log.debug('HeaderController');

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
