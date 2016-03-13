var AppDispatcher = require('../dispatcher/AppDispatcher');

var itemsActions = {

  addItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_ITEM',
      text: text
    });
  },
  removeItem: function (id) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_ITEM',
      id: id
    });
  },
  changeItemStatus: function (id) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_ITEM_STATUS',
      id: id
    });
  },
  changeItem: function (id,text) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_ITEM',
      id:id,
      text: text
    });
  },
};

module.exports = itemsActions;
