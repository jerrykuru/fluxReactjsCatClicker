
var React = require('react');
var CatStore = require('../stores/CatStore');
/**
 * Retrieve the current Cata data from the CatStore
 */
function getCatState() {
  return {
    currentCat: CatStore.getCurrentCat()
  };
}

var CatDetail = React.createClass({

  getInitialState: function() {
    return {

      currentCat: CatStore.getCurrentCat() 
    };
  },
  componentDidMount: function() {
    CatStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CatStore.removeChangeListener(this._onChange);
  },
  /**
   * @return {object}
   */
  render: function() /*object*/ {
    return (
      <div >
        <h2 > {this.state.currentCat.name}  </h2>
        <h2 > {this.state.currentCat.numberOfClicks} </h2>
        <img src={this.state.currentCat.image} alt="cat image"  /> 
      </div>
    );
  },
  /**
   * Event handler for 'change' events coming from the CatStore
   */
  _onChange: function() {
    this.setState(getCatState());
  }

});

module.exports = CatDetail;
