var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENT

var Card = function() {
    var title = 'call mom';
    return (
        <div className="card">
            {title}
        </div>
    );
};

var CardList = React.createClass({
  render: function() {
    var cards = [];
    for (var i = 0; i < 5; i++) {
      cards.push(<Card/>);
    }
    return (
      <section className="card-list">
        <header>To Do</header>
        {cards}
      </section>
    );
  }
});

var Board = React.createClass({
  render: function() {
    var lists = [];
    for (var i = 0; i <3; i++) {
      lists.push(<CardList/>);
    }
    return (
      <section className="board">
        <header>Things to Get Done</header>
        {lists}
        </section>
    );
  }
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <Board/>, document.getElementById('app'));
});
