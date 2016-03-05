var React = require('react');
var ListTitle = require('./ListTitleControl');
var ListContent = require('./ListControl');

var TodoListControl = React.createClass({
    displayName: 'TodoListControl',
    render: function () {
        return (
            <div className="container">
                <ListTitle />
                <ListContent />
            </div>
        );
    }
});

module.exports = TodoListControl;