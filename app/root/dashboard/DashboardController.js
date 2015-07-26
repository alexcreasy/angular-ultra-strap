(function() {
  'use strict';

  angular
    .module('root.dashboard')
    .controller('DashboardController', DashboardController);

  function DashboardController($log) {
    var vm = this;

    vm.title = 'Hey how are you guys?';

    $log.debug(vm.title);
  }
})();
