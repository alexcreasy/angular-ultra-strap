'use strict';

describe('Controller: TodoController', function () {

  // load the controller's module
  beforeEach(module('root.todo'));

  var TodoCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoController', {
      $scope: scope,
      // place here mocked dependencies
      Todo: {}
    });
  }));

  it('should report correctly when it has no todos', function() {
    expect(TodoCtrl.hasTodos()).toBe(false);
  });

});
