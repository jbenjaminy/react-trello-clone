/*--------- DEPENDENCIES ----------*/
var React = require('react');
var ReactDOM = require('react-dom');

/*---------- COMPONENTS -----------*/

// INPUT BOX AND BUTTON
var Input = React.createClass ({
  render: function() {
    return (
      <input 
        type="text" 
        name="add-text" 
        className="add-text" 
        value={this.props.value}
        placeholder="New Card" 
        onChange={this.props.onChange}
      />
   );
  }
});

var Button = React.createClass ({
  render: function() {
    return (
      <input 
        type="submit" 
        className="add-button" 
        value="Add" 
        onClick={this.props.onClick}
      />
    );
  }
});

// CARD
var Card = React.createClass ({
  render: function() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
});

// LIST
var ListContainer = React.createClass({

  // SET INITIAL STATE
  getInitialState: function() {
    return {
      value: "", 
      cards: this.props.cards,
      cardKey: 10
    };
  },

  // CALLBACKS TO CHANGE STATE
  onAddInputChanged: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  onAddClick: function(event) {
    event.preventDefault();

    var cardsArr = this.state.cards.slice();
    cardsArr.push(
      <Card 
        text={this.state.value} 
        key={this.state.cardKey}
      />
    );

    this.setState({
      value: "", 
      cards: cardsArr,
      cardKey: this.state.cardKey += 1
    });
  },
  // RENDER LIST
  render: function() {
    return (
      <div className="list-element">
          <section className="list">
              <header>
                {this.props.title}
              </header>
              <ul className="list-UL">
                {this.state.cards}
              </ul>
          </section>
          <form>
              <Input 
                value={this.state.value} 
                onChange={this.onAddInputChanged}
              />
              <br/>
              <Button 
                onClick={this.onAddClick} 
              />
          </form>
      </div>
    );
  }
});

// BOARD
var Board = React.createClass ({

  // RENDER BOARD
  render: function() {
    // VARIABLES
    var cards1 = [
      <Card text="Return shoes" key={1}/>,
      <Card text="Call Mom" key={2}/>,
      <Card text="Book flight" key={3}/>,
      <Card text="Pick up dry cleaning" key={4}/>
    ];

    var list1 = 
    <ListContainer 
      title={this.props.lists[0]} 
      key="list1"
      cards={cards1} 
    />;

    var cards2 = [
      <Card text="Laundry" key={5}/>
    ];

    var list2 = 
    <ListContainer
      title={this.props.lists[1]}
      key="list2"
      cards={cards2}
    />;

    var cards3 = [ 
      <Card text="Go to the bank" key={6}/>, 
      <Card text="Get a haircut" key={7}/>, 
      <Card text="Schedule a band practice" key={8}/>, 
      <Card text="Fix bathroom cabinet" key={9}/>
    ];

    var list3 = 
    <ListContainer
      title={this.props.lists[2]}
      key="list3"
      cards={cards3} 
    />;

    // RENDERING
    return (
      <section className="board">
        <header className="board-header">
          {this.props.title}
        </header>
        {[list1, list2, list3]}
      </section>
    );
  }
});

/*--------- ON PAGE LOAD ----------*/
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <Board 
          title="Things to Get Done" 
          lists={["To Do", "Doing", "Done"]}
        />, 
        document.getElementById('app'));
});




