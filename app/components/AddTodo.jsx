var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    var {dispatch} = this.props;

    if(todoText.length > 0){
      this.refs.todoText.value = "";
      // this.props.handleAddTodo(todoText);
      dispatch(actions.addTodo(todoText));
    }
    else{
      this.refs.todoText.focus();
    }
  }
})

export default connect()(AddTodo);
