/*--------- DEPENDENCIES ----------*/
var React = require('react');
var ReactDOM = require('react-dom');

/*---------- COMPONENTS -----------*/

// INPUT BOX AND BUTTON
var Input = function(inputProps) {
    return (
      <input type="text" name="add-text" className="add-text" placeholder="New Card" onChange={inputProps.onChange}/>
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
        return {value: "", clicked: false, cards: this.props.cards};
    },

    // CALLBACKS TO CHANGE STATE
    onAddInputChanged: function(event) {
        console.log(event.target.value, '<-- input state change');
        this.setState({
            value: event.target.value});
    },

    onAddClick: function(event) {
        event.preventDefault();
        var cardsArr = this.state.cards.slice();
        cardsArr.push(<Card text={this.state.value} />);
        this.setState({value: "", clicked: true, cards: cardsArr});
        console.log(this.state, '<-- click state change');
  
    },
    // RENDER LIST
    render: function() {
      console.log(this.state, '<-- this.state')
      return (
        <div className="list-element">
            <section className="list">
                <header>{this.props.title}</header>
                <ul className="list-UL">{this.state.cards}</ul>
            </section>
            <form>
                <Input onChange={this.onAddInputChanged} />
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
    var cards2 = [<Card text="Laundry" />];

    var list2 = <ListContainer
    title={this.props.lists[0]}
    key="list2"
    cards={cards2}
    />;

    // RENDERING
    return (
        <section className="board">
                    <header>{this.props.title}</header>
                    {list2}
        </section>
    );
  }
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <Board title="Things to Get Done" lists={["Doing"]}/>, document.getElementById('app'));
});

// var list1 = <List title="To-do" cards={[ < Card text = "Return shoes" />, < Card text = "Call Mom" />, < Card text = "Book flight" />, < Card text = "Pick up dry cleaning" />
// ]} input={< input type = "text" name = "add-text" className = "add-text" placeholder = "New Card" value = "" />} button={< input type = "submit" className = "add-button" value = "Add" />}/>

// var list3 = <List title="Done" cards={[ < Card text = "Go to the bank" />, < Card text = "Get a haircut" />, < Card text = "Schedule a band practice" />, < Card text = "Fix bathroom cabinet" />
// ]} input={< input type = "text" name = "add-text" className = "add-text" placeholder = "New Card" value = "" />} button={< input type = "submit" className = "add-button" value = "Add" />}/>
