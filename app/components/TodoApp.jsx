var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Feed the cat',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoSearch handleSearch={this.handleSearch} />
        <TodoList todos={todos} handleToggle={this.handleToggle} />
        <AddTodo handleAddTodo={this.handleAddTodo} />
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
            completed: false
          }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }
});
