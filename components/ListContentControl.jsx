var React = require('react');
var List = require("./List");
var AddItem = require("./AddItem");
var AddItemContent = require("./AddItemContent");

var StatusStore = require("../stores/StatusStore");

var StatusChangeActions = require("../actions/StatusChangeActions");

var ListTitle = React.createClass({
    displayName: 'ListTitle',
    // 共同定义设置
    getInitialState: function () {
        return {
            items: "hahah",
            AddItemContentStatus: StatusStore.getStatus()
        };
    },
    componentDidMount: function() {
        StatusStore.addStatusChangeListener(this._statusShow);
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
    render: function () {
        return (
            <div className="content">
                <List />
                <AddItem onClick={this.statusChange} />
                <AddItemContent reClick={this.statusChange} AICstatus={this.state.AddItemContentStatus} />
            </div>
        );    
    }
});

module.exports = ListTitle;