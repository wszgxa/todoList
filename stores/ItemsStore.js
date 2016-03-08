var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ItemsStore = assign({}, EventEmitter.prototype, {
  items={},
  getItems: function () {
  }


});

module.exports = TitleStore;
