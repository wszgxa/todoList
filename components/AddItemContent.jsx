var React = require('react');


var AddItemContent = React.createClass({
    displayName: 'AddItemContent',
    render: function () {
        return (
            <div className={this.props.AICstatus}>
            {this.props.tag}
            </div>
        );    
    }
});

module.exports = AddItemContent;