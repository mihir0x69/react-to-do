var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function(){
    var {dispatch, showCompleted, searchText} = this.props;
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.setSearchText} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.toggleShowCompleted} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  },
  setSearchText: function(){
    this.props.dispatch(actions.setSearchText(this.refs.searchText.value));
  },
  toggleShowCompleted: function(){
    this.props.dispatch(actions.toggleShowCompleted());
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
