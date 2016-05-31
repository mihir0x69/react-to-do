var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
