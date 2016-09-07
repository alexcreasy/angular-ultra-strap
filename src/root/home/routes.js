(function() {
  'use strict';

  angular
    .module('root.home')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('root.home', {
      url: '/',
      views: {
        'content@root': {
          templateUrl: 'root/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        }
      }
    });
  }
})();
