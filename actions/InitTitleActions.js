var AppDispatcher = require('../dispatcher/AppDispatcher');

var InitTitleActions = {

  initTitle: function (text) {
    AppDispatcher.dispatch({
      actionType: 'INIT_TITLE',
      text: text
    });
  }
};

module.exports = InitTitleActions;
