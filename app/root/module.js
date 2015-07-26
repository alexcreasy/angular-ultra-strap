(function() {
  'use strict';

  angular
    .module('root', [
      'ui.router',
      'root.dashboard'
    ])
    .config(config);

    function config($locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(false);
      $urlRouterProvider.when('', '/dashboard');
    }

})();
