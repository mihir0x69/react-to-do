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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Feed the cat'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
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
        <TodoList todos={todos} />
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
            text: text
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
