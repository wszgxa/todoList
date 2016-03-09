var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var TitleStore = require('../stores/TitleStore');
var StatusStore = require('../stores/StatusStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'INIT_TITLE':
        TitleStore.setTitleHandler(action.text);
        TitleStore.emitInit();
        break;
    case 'STATUS_CHANGE':
        StatusStore.setStatusHandler(action.text);
        StatusStore.emitStatusChange();
        break;
    default:
      // no op
  }
});

module.exports = AppDispatcher;
