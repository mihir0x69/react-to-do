var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <h3>Boilerplate 3</h3>,
  document.getElementById('app')
);
