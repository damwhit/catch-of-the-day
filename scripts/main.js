var React = require('react');
var ReactDom = require('react-dom');

/*
  App
*/

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Good" />
        </div>
          <Order />
          <Inventory />
      </div>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
})

/*
  Inventory
*/

var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
})

/*
  Inventory
*/

var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
})

/*
  StorePicker
  class name corresponds to tag
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" />
        <input type="submit" />
      </form>
    )
  }
});

ReactDom.render(<App/>, document.querySelector('#main'));
