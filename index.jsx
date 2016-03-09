require("./assets/less/index.less");
var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/TodoList');


ReactDOM.render(
    <TodoList />,
    document.querySelector('#container')
);
