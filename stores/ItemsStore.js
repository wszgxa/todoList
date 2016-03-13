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
  emitListChange: function () {
    this.emit('itemsChange');
  },
  addListChangeListener: function (callback) {
    this.on("itemsChange", callback);
  },
  _initItems: function (Ob) {
    this.items.idMax = Ob.idMax;
    this.items.itemsList = Ob.itemsList;
  },
  addItem: function (text) {
    var item = {
        id: this.items.idMax,
        content: text,
        done: false
    };
    this.items.idMax++;
    this.items.itemsList.push(item);
    window.localStorage.itemsList = JSON.stringify(this.items);
  },
  removeItem: function (id) {
    var itemsCashe = [];
    this.items.itemsList.forEach(function (vl, ky) {
        if (vl.id != id) {
            itemsCashe.push(vl);
        }
    });
    this.items.itemsList = itemsCashe;
    window.localStorage.itemsList = JSON.stringify(this.items);
  },
  changeItemStatus: function (id) {
    var itemsCashe = [];
    this.items.itemsList.forEach(function (vl, ky) {
        if (vl.id != id) {
            itemsCashe.push(vl);
        } else {
            itemsCashe.push({id:id,content:vl.content,status:!vl.status});
        }
    });
    this.items.itemsList = itemsCashe;
    window.localStorage.itemsList = JSON.stringify(this.items);
  },
  changeItem: function (id,text) {
    var itemsCashe = [];
    this.items.itemsList.forEach(function (vl, ky) {
        if (vl.id != id) {
            itemsCashe.push(vl);
        } else {
            itemsCashe.push({id:id,content:text,status:vl.status});
        }
    });
    this.items.itemsList = itemsCashe;
    window.localStorage.itemsList = JSON.stringify(this.items);
  },


});

module.exports = ItemsStore;
