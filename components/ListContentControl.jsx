var React = require('react');
var ListControl = require("./ListControl");
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
        console.log(e);
    },
    changeItems: function (e) {
        console.log(e);
    },
    removeItems: function (e) {
        console.log(e);
    },
    render: function () {
        return (
            <div className="content">
                <ListControl items={this.state.items} />
                <AddItem onClick={this.statusChange} />
                <AddItemContent addClick={this.addItem} reClick={this.statusChange} AICstatus={this.state.AddItemContentStatus} />
            </div>
        );    
    }
});

module.exports = ListTitle;