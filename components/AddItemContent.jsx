var React = require('react');


var AddItemContent = React.createClass({
    displayName: 'AddItemContent',
    render: function () {
        return (
            <div className={'inputWrap ' + this.props.AICstatus}>
                <div className="inner">
                    <div className="title">添加项目</div>
                    <div className="content">
                    <textarea id="itemContent" rows="3"></textarea>
                    </div>
                    <div className="sure s">
                        <button className="btn return" onClick={this.props.reClick} data-name="RETURN">返回</button>
                        <button className="btn btn-primary ensure" onClick={this.props.addClick}>确定</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AddItemContent;
