var React = require('react');
var List = require("./List");
var AddItem = require("./AddItem");
var AddItemContent = require("./AddItemContent");
var ListTitle = React.createClass({
    displayName: 'ListTitle',
    getInitialState: function () {
        return {
            items: "hahah",
            AddItemContentStatus: "hide"
        };
    },
    createItem: function (e) {
        this.setState({
            AddItemContentStatus: ""
        });
    },
    render: function () {
        return (
            <div className="content">
                <List />
                <AddItem onClick={this.createItem} />
                <AddItemContent tag={this.state.items} AICstatus={this.state.AddItemContentStatus} />
            </div>
        );    
    }
});

module.exports = ListTitle;