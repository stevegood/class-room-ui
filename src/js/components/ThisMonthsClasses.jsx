let {
  List,
  Paper
} = mui;

let ClassItem = require('./ClassItem.jsx');

let ThisMonthsClasses = React.createClass({
  mixins: [Reflux.connect(ClassStore, this)],

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  getInitialState: function() {},

  render: function() {
    let classes = this.state.list.map(function(_class) {
      return (
        <ClassItem {..._class} key={_class.id}/>
      )
    });

    let month_name = moment().format('MMMM');

    return (
      <div>
        <h2>Classes for {month_name}</h2>
        <Paper zDepth={1}>
          <List>
            {classes}
          </List>
        </Paper>
      </div>
    );
  }
});

module.exports = ThisMonthsClasses;
