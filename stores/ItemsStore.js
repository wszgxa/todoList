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
            itemsOb = JSON.parse(itemsList);
        this._initItems(itemsOb);
        return itemsOb.itemsList;
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
  changeItem: function (tag, text) {
    var itemsCashe = [];
    this.items.itemsList.forEach(function (vl, ky) {
        if (vl.id !== tag) {
            itemsCashe.push(vl);
        } else {
            itemsCashe.push({id:tag,content:text});
        }
    });
    this.items.itemsList = itemsCashe;
    window.localStorage.itemsList = JSON.stringify(this.items);
  },
  addItem: function (text) {
    var item = {
        id: this.items.idMax,
        content: text
    };
    this.items.idMax++;
    this.items.itemsList.push(item);
    console.log(this.items);
    window.localStorage.itemsList = JSON.stringify(this.items);
  }
});

module.exports = ItemsStore;
