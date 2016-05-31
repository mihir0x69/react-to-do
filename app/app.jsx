var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load top-level components
var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
