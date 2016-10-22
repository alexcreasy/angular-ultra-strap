(function() {
  'use strict';

  angular
    .module('app-ae627c.home')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('app-ae627c.home', {
      url: '/',
      views: {
        'content@app-ae627c': {
          templateUrl: 'app-ae627c/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        }
      }
    });
  }
})();
