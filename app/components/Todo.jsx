var React = require('react');

module.exports = React.createClass({
  render: function(){
    var {id, text, completed} = this.props;
    return(
      <div onClick={() => {
          this.props.handleToggle(id);
        }}
      >
        <input type="checkbox" checked={completed} />
        {' ' + text}
      </div>
    )
  }
});
