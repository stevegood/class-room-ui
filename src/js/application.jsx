(function() {
  let _ = require('lodash');
  let moment = require('moment');
  let React = require('react/addons');
  let Reflux = require('reflux');
  let Router = require('react-router');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let mui = require('material-ui');
  let ThemeManager = new mui.Styles.ThemeManager();
  let Colors = mui.Styles.Colors;

  window._ = _;
  window.moment = moment;
  window.React = React;
  window.Reflux = Reflux;
  window.Router = Router;
  window.mui = mui;
  window.ThemeManager = ThemeManager;
  window.Colors = Colors;

  let ClassActions = window.ClassActions = require('./actions/ClassActions');
  let ClassStore = window.ClassStore = require('./stores/ClassStore');

  ThemeManager.setTheme(ThemeManager.types.LIGHT);

  injectTapEventPlugin();

  let routes = require('./routes.jsx');
  let router = Router.create({
    routes: routes
  });

  router.run(function(Handler) {
    React.render(<Handler/>, document.body);
  });

})();
