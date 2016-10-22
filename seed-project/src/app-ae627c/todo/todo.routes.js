(function() {
  'use strict';

  angular
    .module('app-ae627c')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('app-ae627c.todo', {
      url: '/todo',
      views: {
        'content@app-ae627c': {
          templateUrl: 'app-ae627c/todo/todo.html',
          controller: 'TodoController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
