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
    })
  })
});
