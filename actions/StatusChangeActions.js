var AppDispatcher = require('../dispatcher/AppDispatcher');

var StatusChangeActions = {

  statusChange: function (status) {
    AppDispatcher.dispatch({
      actionType: 'STATUS_CHANGE',
      text: status
    });
  }
};

module.exports = StatusChangeActions;
