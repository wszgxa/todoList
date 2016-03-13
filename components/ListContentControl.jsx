var React = require('react');
var List = require("./List");
var AddItem = require("./AddItem");
var AddItemContent = require("./AddItemContent");

var StatusStore = require("../stores/StatusStore");
var StatusChangeActions = require("../actions/StatusChangeActions");

var ItemsStore = require("../stores/ItemsStore");
var ItemsActions = require("../actions/itemsActions");

var ListTitle = React.createClass({
    displayName: 'ListTitle',
    // 共同定义设置
    getInitialState: function () {
        return {
            items: ItemsStore.getList(),
            AddItemContentStatus: StatusStore.getStatus()
        };
    },
    componentDidMount: function() {
        StatusStore.addStatusChangeListener(this._statusShow);
        ItemsStore.addListChangeListener(this._itemsShow);
    },

    _itemsShow: function () {
        this.setState({
            items: ItemsStore.getList()
        });
    },
    // 状态（展现，添加item）相关
    _statusShow: function () {
        this.setState({
            AddItemContentStatus: StatusStore.getStatus()
        });
        var $itemContent = document.getElementById('itemContent');
            $itemContent.focus();

    },
    statusChange: function (e) {
        // 根据点击目标的data-name来触发actions
        if (e.target.dataset.name === "ADD") {
            StatusChangeActions.statusChange("");
        } else if (e.target.dataset.name === "RETURN") {
            StatusChangeActions.statusChange("hide");
        }
    },
    addItem: function () {
        var content = document.getElementById('itemContent');
        if (content.value.length === 0) {
            alert("请输入内容！");
        } else if (content.value.length > 20) {
            alert("请输入少于20个字符！");
        } else {
            ItemsActions.addItem(content.value);
            StatusChangeActions.statusChange("hide");
        }
    },
    itemStatusChange: function (e) {
        var id = e.target.parentNode.dataset.item;
        ItemsActions.changeItemStatus(id);
    },
    changeItem: function (e) {
        var text = e.target.value,
            id = e.target.dataset.item;
        ItemsActions.changeItem(id,text);
    },
    removeItem: function (e) {
        var id = e.target.parentNode.dataset.item;
        ItemsActions.removeItem(id);
    },
    handleKeyPress: function (e) {
        if (e.keyIdentifier === "Enter"|| e.charCode === 13) {
            this.addItem();
        }
    },
    render: function () {
        return (
            <div className="content">
                <List changeItem={this.changeItem} itemStatusChange={this.itemStatusChange} removeItem={this.removeItem} items={this.state.items} />
                <AddItem onClick={this.statusChange} />
                <AddItemContent handleKeyPress={this.handleKeyPress} addClick={this.addItem} reClick={this.statusChange} AICstatus={this.state.AddItemContentStatus} />
            </div>
        );    
    }
});

module.exports = ListTitle;