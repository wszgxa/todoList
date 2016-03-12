var React = require('react');
var Tool = require('../tool/Tool');

var List = React.createClass({
    displayName: 'List',
    render: function () {
        var that = this;
        var itemsHtml = this.props.items.map(function(index, i) {
            var item = (
                    <div className="item" key={i}>
                        <div data-item={index.id} className="view">
                            <input type="checkbox" checked={index.done} onClick={that.props.itemStatusChange}/>
                            <span>{index.content}</span>
                            <a onClick={that.props.removeItem}></a>
                        </div>
                        <input data-item={index.id} className="edit" type="text" />
                    </div>
                );
            return item;
        });
        return (
            <div className="item-wrap">{itemsHtml}</div>
        );    
    }
});

module.exports = List;