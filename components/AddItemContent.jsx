var React = require('react');


var AddItemContent = React.createClass({
    displayName: 'AddItemContent',
    render: function () {
        return (
            <div className={'inputWrap ' + this.props.AICstatus}>
                <div className="inner">
                    <div className="title">添加项目</div>
                    <div className="content">
                    <textarea></textarea>
                    </div>
                    <div className="sure">
                        <button className="btn return">返回</button>
                        <button className="btn btn-primary ensure">确定</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AddItemContent;
