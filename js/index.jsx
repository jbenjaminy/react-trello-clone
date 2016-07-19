var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENT

var Card = function(cardProps) {
    return (
        <div className="card">
            {cardProps.text}
        </div>
    );
};

var List = function(listProps) {
    return (
      <section className="list">
        <header>{listProps.title}</header>
        {listProps.cards}
      </section>
    );
  };

var Board = function(boardProps) {
    return (
      <section className="board">
        <header>{boardProps.title}</header>
        {boardProps.lists}
        </section>
    );
  };

var App = function() {

var list1 = <List title="To-do"
cards={[<Card text="Return shoes" />,<Card text="Call Mom" />,<Card text="Book flight" />,<Card text="Pick up dry cleaning" />]} />;

var list2 = <List title="Doing" cards={[<Card text="Laundry" />]} />

var list3 = <List title="Done" cards={[<Card text="Go to the bank" />,<Card text="Get a haircut" />,<Card text="Schedule a band practice" />,<Card text="Fix bathroom cabinet" />]} />

  return (
    <section className="app">
      <Board title="Things to Get Done"
             lists={[list1, list2, list3]}
      />
    </section>

  );
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
