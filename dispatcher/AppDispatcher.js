var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var TitleStore = require('../stores/TitleStore');
var StatusStore = require('../stores/StatusStore');
var ItemsStore = require('../stores/ItemsStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    // title 
    case 'INIT_TITLE':
        TitleStore.setTitleHandler(action.text);
        TitleStore.emitInit();
        break;

    // status
    case 'STATUS_CHANGE':
        StatusStore.setStatusHandler(action.text);
        StatusStore.emitStatusChange();
        break;

    // items    
    case 'ADD_ITEM':
        ItemsStore.addItem(action.text);
        ItemsStore.emitListChange();
        break;
    case 'REMOVE_ITEM':
        ItemsStore.removeItem(action.id);
        ItemsStore.emitListChange();
        break;
    case 'CHANGE_ITEM_STATUS':
        ItemsStore.changeItemStatus(action.id);
        ItemsStore.emitListChange();
        break;
    case 'CHANGE_ITEM':
        ItemsStore.changeItem(action.id,action.text);
        ItemsStore.emitListChange();
        break;
    default:
      // no op
  }
});

module.exports = AppDispatcher;
