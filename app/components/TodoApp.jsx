var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Feed the cat'
        },
        {
          id: 3,
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
    alert('New Todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
});
