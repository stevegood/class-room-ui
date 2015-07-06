let {
  List,
  Paper
} = mui;

let ClassItem = require('./ClassItem.jsx');

let TaggedClasses = React.createClass({
  render: function() {
    return (
      <div className="tagged-classes">
        <h2>Tagged Classes</h2>
        <p>{this.props.params.tag}</p>
      </div>
    );
  }
});

module.exports = TaggedClasses;
