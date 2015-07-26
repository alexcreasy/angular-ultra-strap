(function() {
  'use strict';

  angular
    .module('root.dashboard')
      .config(routes);

  function routes($stateProvider) {  
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'root/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm'
    });
  };
})();
