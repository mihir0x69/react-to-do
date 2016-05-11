var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  },
  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    if(searchText.length > 0){
        this.props.handleSearch(showCompleted, searchText);
    }
  }
});
