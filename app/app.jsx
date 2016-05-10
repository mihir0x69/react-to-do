var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load top-level components
var TodoApp = require('TodoApp');

//load foundation
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
