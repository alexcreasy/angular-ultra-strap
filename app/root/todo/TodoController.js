(function() {
  'use strict';

  angular
    .module('root.todo')
    .controller('TodoController', TodoController);

  function TodoController(Todo) {
    var vm = this;

    vm.todoList = [];
    vm.hasTodos = hasTodos;
    vm.addTodo = addTodo;
    vm.clearTodos = clearTodos;

    function hasTodos() {
      return vm.todoList.length > 0;
    }

    function addTodo(todo) {
      vm.todoList.push(new Todo(todo.label));
    }

    function clearTodos() {
      vm.todoList = [];
    }
  }
})();
