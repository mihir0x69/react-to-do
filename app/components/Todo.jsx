var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";

    var renderDate = () => {
      var message = 'Created on ';
      var timestamp = createdAt;

      if(completed){
        var message = 'Completed on ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div className={todoClassName} onClick={this.handleChange}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>        
        </div>
      </div>
    )
  },
  handleChange: function(){
    this.props.handleToggle(this.props.id);
  }
});
