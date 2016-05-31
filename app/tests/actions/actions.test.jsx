var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Walk the dog'
    }
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('Should generate add todos action', () => {
    var action = {
      type: 'ADD_TODOS',
      todos: [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
    };
    var res = actions.addTodos(action.todos);
    expect(res).toEqual(action);
  });

  it('Should toggle showCompleted', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('Should toggle Todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
