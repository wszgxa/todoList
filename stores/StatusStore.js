var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var StatusStore = assign({}, EventEmitter.prototype, {
  status: "hide",
  getStatus: function () {
      return this.status;
  },
  setStatusHandler: function (text) {
    this.status = text;
  },
  emitStatusChange: function () {
    this.emit('statusChange');
  },
  addStatusChangeListener: function (callback) {
    this.on("statusChange", callback);
  }
});

module.exports = StatusStore;
