(function() {
  'use strict';

  angular
    .module('root.home')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;

    vm.title = "ROOT";
  }
})();
