var React = require('react');
var Tool = require('../tool/Tool');

var ItemsStore = require("../stores/ItemsStore");
var ItemsActions = require("../actions/itemsActions");

var List = React.createClass({
    displayName: 'List',
    getInitialState: function () {
        return {
            itemsHtml: this.getHtml()
        };
    },
    changeStatus: function (e) {
        console.log(e.target.parentNode.dataset.item);
    },
    changeItems: function (e) {
        console.log(e);
    },
    removeItems: function (e) {
        console.log(e);
    },
    getHtml : function () {
        var that = this;
        var itemsHtml = this.props.items.map(function(index, i) {
            var item = (
                    <div className="item" key={i}>
                        <div data-item={index.id} class="view">
                            <input type="checkbox" checked={index.done} onClick={that.changeStatus}/>
                            <span>{index.content}</span>
                            <a onClick={that.removeItems}></a>
                        </div>
                        <input data-item={index.id} className="edit" type="text" />
                    </div>
                );
            return item;
        });
        return itemsHtml;
    },
    render: function () {
        return (
            <div className="item-wrap">{this.state.itemsHtml}</div>
        );    
    }
});

module.exports = List;