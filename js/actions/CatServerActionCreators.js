
var CatAppDispatcher = require('../dispatcher/AppDispatcher');
var CatConstants = require('../constants/CatConstants');

var ActionTypes = CatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    CatAppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_MESSAGES,
      rawMessages: rawMessages
    });
  },
  reciveCatDetail: function(catNo) {
    CatAppDispatcher.dispatch({
      type: ActionTypes.CAT_DETAIL,
      catId: catNo
    });
  }
};