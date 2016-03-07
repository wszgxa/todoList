var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TitleStore = assign({}, EventEmitter.prototype, {
  title: "",
  getTitle: function () {
      if (this.title.length !== 0) {
        return this.title;
      } else if (window.localStorage.ListTitle === undefined) {
          return false;
      } else {
        return window.localStorage.ListTitle;
      }
  },
  setTitleHandler: function (text) {
    this.title = text;
    window.localStorage.ListTitle = text;
    this.emitInit();
  },
  emitInit: function () {
    this.emit('initTitle');
  },
  addInitTitleListener: function (callback) {
    this.on("initTitle", callback);
  }


});

module.exports = TitleStore;
