var React = require('react');
var Tool = require('../tool/Tool');

var List = React.createClass({
    displayName: 'List',

    // 闭包处理touch事件
    handleTouchStart: function (e,ss) {
        var startTime = 0;
        return function (e) {
            if (startTime === 0) {
                startTime = e.timeStamp;
                // 单击后清除startTime
                setTimeout(function() {startTime = 0 }, 800);
            } else{
                if (e.timeStamp-startTime < 600) {
                    var tag = e.target.parentNode;
                    Tool.changeClass(tag,"","editing");
                    e.target.nextSibling.focus();
                    startTime = 0;
                } else {
                    startTime = 0;
                }
            }
        }

    }(),
    handleDoubleBclick: function (e) {
        var tag = e.target.parentNode;
        Tool.changeClass(tag,"","editing");
        e.target.nextSibling.focus();
    },
    handleChangeBlur: function (e) {
        var tag = e.target.parentNode;
        Tool.changeClass(tag,"editing","");
    },
    handleChangeKeyPress: function (e) {
        if (e.keyIdentifier === "Enter"|| e.charCode === 13) {
            var tag = e.target.parentNode;
            Tool.changeClass(tag,"editing","");
        }
    },
    render: function () {
        var that = this;
        var itemsHtml = this.props.items.map(function(index, i) {
            var item = (
                    <div className="item" key={i}>
                        <div onTouchStart={that.handleTouchStart} onDoubleClick={that.handleDoubleBclick} data-item={index.id} className="view">
                            <input type="checkbox" checked={index.done} onClick={that.props.itemStatusChange}/>
                            <span>{index.content}</span>
                            <a onClick={that.props.removeItem}></a>
                        </div>
                        <input onKeyPress={that.handleChangeKeyPress} onBlur={that.handleChangeBlur} onChange={that.props.changeItem} data-item={index.id} className="edit" value={index.content} type="text"/>
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