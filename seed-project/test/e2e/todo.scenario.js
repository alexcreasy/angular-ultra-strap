describe('todo view', function () {
  'use strict';

  describe('todo list', function () {
    var todoList,
        todoInput,
        addTaskBtn,
        clearBtn;

    beforeEach(function () {
      browser.get('/#/todo');

      todoList = element.all(by.repeater('todo in vm.todoList'));
      todoInput = element(by.model('task.label'));
      addTaskBtn = element(by.buttonText('Add Task'));
      clearBtn = element(by.buttonText('Clear'));
    });

    it('should create a todo when the user clicks add task', function () {
      expect(todoList.count()).toBe(0);

      todoInput.sendKeys('Test ALL the things');
      addTaskBtn.click();

      expect(todoList.count()).toBe(1);

      todoInput.clear();
      todoInput.sendKeys('Deploy orbital weapons platform');
      addTaskBtn.click();

      expect(todoList.count()).toBe(2);
    });

    it('should clear the todolist when the user clicks clear', function () {
      todoInput.sendKeys('Test ALL the things');
      addTaskBtn.click();
      todoInput.clear();
      todoInput.sendKeys('Deploy orbital weapons platform');
      addTaskBtn.click();

      expect(todoList.count()).toBe(2);

      clearBtn.click();
      expect(todoList.count()).toBe(0);
    });

  });

});
