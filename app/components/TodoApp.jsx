var React = require('react');
var TodoList = require('TodoList');

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
      ]
    }
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});
