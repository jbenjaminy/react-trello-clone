var React = require('react');
var ReactDOM = require('react-dom');

    // COMPONENT
var Person = function() {
    // Variables
    var name = 'Derek Zoolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
    var job = 'Male model';
    // Returns React element
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

var PersonList = function() {
    var people = [];
    for (var i=0; i < 5; i++) {
        people.push(<Person />);
    }
    return (
        <div className="person-list">
            {people}
        </div>
    );
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});