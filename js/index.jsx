var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Input = function(inputProps) {
    return <input onChange={inputProps.onChange}/>;
};

var Button = function(buttonProps) {
    return <input onClick={buttonProps.onClick}/>;
};

var Card = function(cardProps) {
    return (
        <li>{cardProps.text}</li>
    );
};

var ListContainer = React.createClass({
    getInitialState: function() {
        return {clicked: false, input: ""};
    },

    onAddInputChanged: function() {

        this.setState({
            input: find(this.props.input.val())
        });
    },

    onAddClick: function() {
        this.setState({clicked: true});
    },

    render: function() {
      console.log(this.state, '<-- this.state');
      return (
        <div className="list-element">
            <section className="list">
                <header>{this.props.title}</header>
                <ul className="list-UL">{this.props.cards}</ul>
            </section>
            <form>
                {this.props.input}
                <br/>
                {this.props.button}
            </form>
        </div>
      );
    }

});

// render new card

var Board = React.createClass ({



render: function() {

  var input = < input type="text" name="add-text" className="add-text" placeholder="New Card" onChange={this.onAddInputChanged} />;
  var button = <input type="submit" className="add-button" value="Add" onClick={this.onAddClick} />;
  var cards2 = [< Card key="2" text="Laundry" />];
  var list2 = <ListContainer
  title={this.props.lists[0]}
  key="list2"
  cards={cards2}
  input={input}
  button={button}
  />;

  return (
      <section className="board">
                  <header>{this.props.title}</header>
                  {list2}
      </section>
  );
}
});


  //   var list1 = <List title="To-do" cards={[ < Card text = "Return shoes" />, < Card text = "Call Mom" />, < Card text = "Book flight" />, < Card text = "Pick up dry cleaning" />
  // ]} input={< input type = "text" name = "add-text" className = "add-text" placeholder = "New Card" value = "" />} button={< input type = "submit" className = "add-button" value = "Add" />}/>



  //   var list3 = <List title="Done" cards={[ < Card text = "Go to the bank" />, < Card text = "Get a haircut" />, < Card text = "Schedule a band practice" />, < Card text = "Fix bathroom cabinet" />
  // ]} input={< input type = "text" name = "add-text" className = "add-text" placeholder = "New Card" value = "" />} button={< input type = "submit" className = "add-button" value = "Add" />}/>

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <Board title="Things to Get Done" lists={["Doing"]}/>, document.getElementById('app'));
});
