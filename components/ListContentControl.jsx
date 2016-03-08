var React = require('react');
var List = require("./List");
var AddItem = require("./AddItem");
var ListTitle = React.createClass({
    displayName: 'ListTitle',

    render: function () {
        return (
            <div className="content">
                <List />
                <AddItem />
            </div>
        );    
    }
});

module.exports = ListTitle;