var AppDispatcher = require('../dispatcher/AppDispatcher');

var itemsActions = {

  addItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_ITEM',
      text: text
    });
  },
};

module.exports = itemsActions;
