var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var TitleStore = require('../stores/TitleStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'INIT_TITLE':
      TitleStore.setTitleHandler(action.text);
      break;
    default:
      // no op
  }
});

module.exports = AppDispatcher;
