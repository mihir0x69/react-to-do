var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


module.exports = React.createClass({
  getInitialState: function(){
    return{
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch handleSearch={this.handleSearch} />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
});
