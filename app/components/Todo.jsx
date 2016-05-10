var React = require('react');

module.exports = React.createClass({
  render: function(){
    var {id, text} = this.props;
    return(
      <div>
        <p>{id + '. ' + text}</p>
      </div>
    )
  }
});
