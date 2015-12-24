var CatServerActionCreators = require('../actions/CatServerActionCreators');
var $ = require('jquery');
var catsUrl = "http://localhost:3000/api/cats";


module.exports = {

  getAllMessages: function() {
    var jqxhr = $.get(catsUrl, function(rawMessages) {
        var catData = rawMessages;
        CatServerActionCreators.receiveAll(catData);
      })
      .done(function(data) {
      })
      .fail(function(e) {
       console.log("error=", e);
      })
      .always(function(e) {
      });



  }

};