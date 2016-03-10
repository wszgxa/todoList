var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ItemsStore = assign({}, EventEmitter.prototype, {
  items: {
    idMax : 0,
    itemsList: []
  },
  getList: function () {
    if (this.items.idMax !== 0) {
        return this.items.itemsList;
    } else if (window.localStorage.itemsList !== undefined) {
        var itemsList = window.localStorage.itemsList,
            itemsOb = JSON.stringify(itemsList);
        return itemsOb.itemsList;
        this._initItems(itemsOb);
    } else {
        return this.items.itemsList;
    }
  },
  getIdMax: function () {
      return this.items.idMax;
  },
  _initItems: function (Ob) {
      this.items.idMax = Ob.idMax;
      this.items.itemsList = Ob.itemsList;
  },
  changeItem: function (id) {
      
  }
});

module.exports = TitleStore;
