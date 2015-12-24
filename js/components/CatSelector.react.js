var React = require('react');
var CatServerActionCreators = require('../actions/CatServerActionCreators');
var CatSelector = React.createClass({

  getInitialState: function() {
    return {
      name: this.props.name,
      catNo: this.props.catNo 
    };
  },
  handleClick: function(e) {
      e.preventDefault();
      CatServerActionCreators.reciveCatDetail(this.state.catNo);
   },
  render: function() {
    return (
        <li onClick={this.handleClick}>{this.state.name}</li>
    );
  }

});

module.exports = CatSelector;