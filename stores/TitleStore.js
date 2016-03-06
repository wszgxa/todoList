var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TitleStore = assign({}, EventEmitter.prototype, {
  title: "",
  getTitle: function () {
      if (window.localStorage.ListTitle === undefined) {
          return false;
      } else {
        return window.localStorage.ListTitle;
      }
  },
  setTitle: function () {
  }

});

module.exports = TitleStore;
