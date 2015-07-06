let RouteHandler = Router.RouteHandler;
let AppCanvas = mui.AppCanvas;
let Header = require('./Header.jsx');

class Main extends React.Component {
  constructor() {
    super();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <AppCanvas>
        <Header title='Class Room Organizer'/>
        <RouteHandler {...this.props}/>
      </AppCanvas>
    );
  }
};

Main.contextTypes = {
  router: React.PropTypes.func
};

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Main;
