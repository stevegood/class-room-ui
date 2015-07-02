let Header = require('./Header.jsx');
let List = mui.List;
let ListItem = mui.ListItem;
let Paper = mui.Paper;

let Main = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("ClassStore")],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

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
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
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
      <div>
        <Header />
        <div id="main-content">
          <Paper zDepth={1}>
            <List>
              {classes}
            </List>
          </Paper>
        </div>
      </div>
    )
  }

});

module.exports = Main;
