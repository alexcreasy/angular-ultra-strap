(function() {
  'use strict';

  angular
    .module('root')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('root.todo', {
      url: '/todo',
      views: {
        'content@root': {
          templateUrl: 'root/todo/todo.html',
          controller: 'TodoController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
