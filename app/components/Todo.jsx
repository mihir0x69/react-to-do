var React = require('react');

module.exports = React.createClass({
  render: function(){
    var {id, text, completed} = this.props;
    return(
      <label onClick={this.handleChange}>
        <input type="checkbox" checked={completed} />
        {' ' + text}
      </label>
    )
  },
  handleChange: function(){
    this.props.handleToggle(this.props.id);
  }
});
