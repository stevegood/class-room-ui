let { List, ListItem, MenuItem, Paper } = mui;

let ThisMonthsClasses = React.createClass({
  mixins: [
    FluxMixin,
    StoreWatchMixin("ClassStore")
  ],

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  getInitialState: function() {
    return {};
  },

  getStateFromFlux: function() {
    let flux = this.getFlux();
    return {
      classData: flux.store("ClassStore").getState()
    };
  },

  render: function() {
    let classData = this.state.classData.classes;
    let classes = Object.keys(classData).map(function(id){
      return (
        <ListItem key={id}>
          {classData[id].title} - {classData[id].description}
        </ListItem>
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
