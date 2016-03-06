var React = require('react');
var TitleStore = require('../stores/TitleStore');

var ListTitle = React.createClass({
    displayName: 'ListTitle',
    getInitialState: function functionName() {
        return {
            title: TitleStore.getTitle()
        };
    },
    render: function(argument) {
        if (this.state.title) {
            return (
                <header>
                    <h2>{this.state.title} List</h2>
                </header>
            );
        } else {
            return (
                <header>
                    <h2>Todo List</h2>
                    <div id="setTitleWrap" className="setTitleWrap">
                        <div className="inner">
                            <div className="header">请填写昵称</div>
                            <input type="text" id="inittitle" />
                            <div>
                                <button className="sure">✅确定</button>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }

    }

});

module.exports = ListTitle;
