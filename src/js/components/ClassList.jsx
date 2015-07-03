let List = mui.List;
let ListItem = mui.ListItem;
let Page = require('./Page.jsx');

let ClassList = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("ClassStore")],

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

    return (
      <Page title="Available Classes">
        <List>
          {classes}
        </List>
      </Page>
    );
  }
});

module.exports = ClassList;
