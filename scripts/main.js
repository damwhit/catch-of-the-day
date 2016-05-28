var React = require('react');
var ReactDom = require('react-dom');

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

ReactDom.render(<StorePicker/>, document.querySelector('#main'));
