var React = require('react');
var Todo = require('Todo');

module.exports = React.createClass({
  render: function(){
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} handleToggle={this.props.handleToggle} />
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});
