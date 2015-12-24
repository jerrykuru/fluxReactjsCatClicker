var React = require('react');
var CatDetail = require('./CatDetail.react');
var CatList = require('./CatList.react');
var CatStore = require('../stores/CatStore');

/**
 * Retrieve the current Cata data from the CatStore
 */
function getCatState() {
  return {
    allCats: CatStore.getAll(),
    currentCat: CatStore.getCurrentCat()
  };
}

var CatClickerApp = React.createClass({

  getInitialState: function() {
    return getCatState();
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
  render: function() {
    return ( < div >
      < CatList allCats = {
        this.state.allCats
      }
      /> < CatDetail currentCat = {
        this.state.currentCat
      }
      /> < /div>
    );
  },

  /**
   * Event handler for 'change' events coming from the CatStore
   */
  _onChange: function() {
    this.setState(getCatState());
  }

});

module.exports = CatClickerApp;