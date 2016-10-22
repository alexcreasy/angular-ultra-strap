(function() {
  'use strict';

  angular
    .module('app-ae627c')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('app-ae627c', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'app-ae627c/layout.html'
        },
        'header@app-ae627c': {
          templateUrl: 'app-ae627c/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
