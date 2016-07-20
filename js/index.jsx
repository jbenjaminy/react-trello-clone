/*--------- DEPENDENCIES ----------*/
var React = require('react');
var ReactDOM = require('react-dom');

/*---------- COMPONENTS -----------*/

// INPUT BOX AND BUTTON
var Input = function(inputProps) {
    return (
      <input type="text" name="add-text" className="add-text" value={inputProps.value}placeholder="New Card" onChange={inputProps.onChange}/>
    );
};

var Button = function(buttonProps) {
    return (
      <input type="submit" className="add-button" value="Add" onClick={buttonProps.onClick}/>
    );
};

// CARD
var Card = function(cardProps) {
    return (
        <li>{cardProps.text}</li>
    );
};

// LIST
var ListContainer = React.createClass({

  // SET INITIAL STATE
    getInitialState: function() {
        return {value: "", cards: this.props.cards};
    },

    // CALLBACKS TO CHANGE STATE
    onAddInputChanged: function(event) {
        this.setState({
            value: event.target.value});
    },

    onAddClick: function(event) {
        event.preventDefault();
        var cardsArr = this.state.cards.slice();
        cardsArr.push(<Card text={this.state.value} />);
        this.setState({value: "", cards: cardsArr});
    },
    // RENDER LIST
    render: function() {
      return (
        <div className="list-element">
            <section className="list">
                <header>{this.props.title}</header>
                <ul className="list-UL">{this.state.cards}</ul>
            </section>
            <form>
                <Input value={this.state.value} onChange={this.onAddInputChanged}/>
                <br/>
                <Button onClick={this.onAddClick} />
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
      <Card text = "Return shoes" />,
      <Card text = "Call Mom" />,
      <Card text = "Book flight" />,
      <Card text = "Pick up dry cleaning"/>
    ];

    var list1 = <ListContainer 
      title={this.props.lists[0]} 
      key="list1"
      cards={cards1} 
    />;

    var cards2 = [
      <Card text="Laundry" />
    ];

    var list2 = <ListContainer
      title={this.props.lists[1]}
      key="list2"
      cards={cards2}
    />;

    var cards3 = [ 
      <Card text = "Go to the bank" />, 
      <Card text = "Get a haircut" />, 
      <Card text = "Schedule a band practice" />, 
      <Card text = "Fix bathroom cabinet" />
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
          <header>{this.props.title}</header>
          {[list1, list2, list3]}
        </section>
    );
  }
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <Board title="Things to Get Done" lists={["To Do", "Doing", "Done"]}/>, document.getElementById('app'));
});




