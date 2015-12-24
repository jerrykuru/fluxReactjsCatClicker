var React = require('react');
var CatClickerApp = require('./components/CatClickerApp.react');
var CatWebAPIUtils = require('./utils/CatWebAPIUtils');
CatWebAPIUtils.getAllMessages();
React.render(
  <CatClickerApp />,
  document.getElementById('catClickApp')
);
