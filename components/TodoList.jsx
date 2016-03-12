var React = require('react');
var ListTitle = require('./ListTitleControl');
var ListContent = require('./ListContentControl');

var TodoListControl = React.createClass({
    displayName: 'TodoListControl',

    render: function () {
        return (
            <div className="wrapper">
                <ListTitle />
                <ListContent />
                <aside id="notice" class="notice hide"></aside>

            </div>
        );
    }
});

module.exports = TodoListControl;
