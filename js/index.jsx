var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Input = function(inputProps) {
  return <input onChange={inputProps.onChange} />;
};

var Button = function(buttonProps) {
  return <input onClick={buttonProps.onClick} />;
};

var Card = function(cardProps) {
    return (
            <li>{cardProps.text}</li>
    );
};

var List = function(listProps) {
  getInitialState: function() {
    return {clicked: false} {input: null};
  },

  onAddInputChanged: function() {
    this.setState({
      input: find(listProps.input.val());
    });
  },

  onAddClick: function() {
    this.setState({
      clicked: true
    });
  },

  // render new card

    return (
      <div className="list-element">
        <section className="list">
          <header>{listProps.title}</header>
          <ul className="list-UL">{listProps.cards}</ul>
        </section>
        <form>
            {listProps.input}
            <br />
            {listProps.button}
        </form> 
      </div>
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
cards={[<Card text="Return shoes" />,<Card text="Call Mom" />,<Card text="Book flight" />,<Card text="Pick up dry cleaning" />]} input={<input type="text" name="add-text" class="add-text" placeholder="New Card" value=null/>} button={<input type="submit" class="add-button" value="Add"/>}/>

var list2 = <List title="Doing" cards={[<Card text="Laundry" />]} input={<input type="text" name="add-text" class="add-text" placeholder="New Card" value=null/>} button={<input type="submit" class="add-button" value="Add"/>} />

var list3 = <List title="Done" cards={[<Card text="Go to the bank" />,<Card text="Get a haircut" />,<Card text="Schedule a band practice" />,<Card text="Fix bathroom cabinet" />]} input={<input type="text" name="add-text" class="add-text" placeholder="New Card" value=null/>} button={<input type="submit" class="add-button" value="Add"/>}/>

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
