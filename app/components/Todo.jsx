var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;

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
      <div onClick={this.handleChange}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  },
  handleChange: function(){
    this.props.handleToggle(this.props.id);
  }
});
