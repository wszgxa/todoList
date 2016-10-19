var React = require('react');
var Tool = require('../tool/Tool');

var List = React.createClass({
  displayName: 'List',

  // 长按修改
  editStatus: function (e) {
    var tag = e.target.parentNode;
    Tool.changeClass(tag,"","editing");
    e.target.nextSibling.focus();
  },
  handleTouchStart: function (e) {
    timer = setInterval(this.editStatus(e), 2000);
  },
  handleTouchEnd:function () {
    clearTimeout(timer);
  },
  dbChange: function (tag) {
    Tool.changeClass(tag,"","editing");
    tag.lastChild.focus();
  },
  handleDoubleBclick: function (e) {
    e.stopPropagation();
    if (e.target.nodeName === "LABEL") {
      this.dbChange(e.target.parentNode.parentNode);
    } else if (e.target.nodeName === "DIV") {} {
      this.dbChange(e.target.parentNode);
    }        
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
          <div onTouchStart={that.handleTouchStart} onTouchEnd={that.handleTouchEnd} onDoubleClick={that.handleDoubleBclick} data-item={index.id} className="view">
            <input type="checkbox" checked={index.done} onClick={that.props.itemStatusChange}/>
            <label>{index.content}</label>
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