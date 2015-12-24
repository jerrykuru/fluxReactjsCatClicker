
var React = require('react');
var CatSelector = require('./CatSelector.react');
var CatList = React.createClass({

  getInitialState: function() {
    return {
      allCats: this.props.allCats 
    };
  },
 render: function() {
    var catArray = [];
    if (Array.isArray(this.state.allCats)){
      catArray = this.state.allCats;
    }

    var catNodes = catArray.map(function(item) {
      return (
        <CatSelector key={item.id} catNo={item.id} name={item.name} >
        </CatSelector>
      );
    });
    return (
      <div className="catselector">
      <ul>
         {catNodes}
      </ul>
      </div>
    );
  }

});

module.exports = CatList;
