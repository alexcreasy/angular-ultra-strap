(function() {
  'use strict';

  angular
    .module('root')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('root', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'root/layout.html'
        },
        'header@root': {
          templateUrl: 'root/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
