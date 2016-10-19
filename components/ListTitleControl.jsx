var React = require('react');
var TitleStore = require('../stores/TitleStore');
var InitTitleActions = require('../actions/InitTitleActions');

var ListTitle = React.createClass({
  displayName: 'ListTitle',
  getInitialState: function functionName() {
    return {
      title: TitleStore.getTitle()
    };
  },
  _initTitle: function () {
    this.setState({
      title: TitleStore.getTitle()
    });
  },
  checkoutTitle: function () {
    var title = document.getElementById('title').value;
    if (title.length===0 ||title.length>8) {
      return false;
    } else {
      return title;
    }
  },
  initTitle: function () {
    var title = this.checkoutTitle();
    if (title) {
      InitTitleActions.initTitle(title)
    } else {
      alert("请输入长度在8个字符内的昵称");
    }
  },
  handleKeyPress: function (e) {
    if (e.keyIdentifier === "Enter"|| e.charCode === 13) {
      this.initTitle();
    }
  },
  componentDidMount: function() {
    TitleStore.addInitTitleListener(this._initTitle);
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
          <div id="setTitleWrap" className="inputWrap">
            <div className="inner">
              <div className="title">请填写昵称</div>
              <div className="content">
                <input type="text" onKeyPress={this.handleKeyPress} id="title" />
              </div>
              <div className="sure">
                <button className="btn btn-primary" onClick={this.initTitle}>确定</button>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
});

module.exports = ListTitle;
