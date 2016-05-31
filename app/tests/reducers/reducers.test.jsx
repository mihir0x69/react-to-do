var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('Should set text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer('', action);
      expect(res).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompleted', () => {
    it('Should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('Should toggle todo', () => {
      var todos = [
        {
          id: '123',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

  it('Should add existing todos', () => {
    var todos = [{
      id: 111,
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    var res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  })
});
