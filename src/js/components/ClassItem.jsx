let ListItem = mui.ListItem;

let ClassItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    created_at: React.PropTypes.any,
    updated_at: React.PropTypes.any,
    id: React.PropTypes.number.isRequired
  },

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <ListItem key={this.props.id}>
        {this.props.title} - {this.props.description}
      </ListItem>
    )
  }
});

module.exports = ClassItem;
