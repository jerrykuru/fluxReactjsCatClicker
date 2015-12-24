var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CatConstants = require('../constants/CatConstants');
var assign = require('object-assign');
var ActionTypes = CatConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var _cats = [];
var _currentCatIndex = 0;

function _addMessages(rawMessages) {
  rawMessages.data.forEach(function(cat) {
    _cats.push(cat)
  });
}

function _incrementClickCount(catId) {
  _cats[catId].numberOfClicks = parseInt(_cats[catId].numberOfClicks) + 1
  _currentCatIndex = catId;
}

var CatStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of cats.
   * @return {object}
   */
  getAll: function() {
    return _cats;
  },
  /**
   * Get the current cat.
   * @return {object}
   */
  getCurrentCat: function() {
    var cat = {};
    cat.name = "";
    cat.numberOfClicks = 0;
    cat.image = "";
    if (typeof _cats[_currentCatIndex] === "undefined") {
      return cat;
    }
    return _cats[_currentCatIndex];
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_RAW_MESSAGES:
      rawMessages = action.rawMessages;
      _addMessages(rawMessages);
      CatStore.emitChange();
      break;
    case ActionTypes.CAT_DETAIL:
      catId = action.catId;
      _incrementClickCount(catId);
      CatStore.emitChange();
      break;
       
    default:
      console.log("default");
  }
  
});

module.exports = CatStore;