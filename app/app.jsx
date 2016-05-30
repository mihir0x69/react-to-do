var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load top-level components
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//load foundation
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
