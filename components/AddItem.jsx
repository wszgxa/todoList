var React = require('react');

var AddItem = React.createClass({
    displayName: 'AddItem',

    render: function () {
        return (
            <div className="addItem">
                <a herf="#" onClick={this.props.onClick}>Add</a>
            </div>
        );    
    }
});

module.exports = AddItem;