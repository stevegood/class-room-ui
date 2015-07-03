(function () {
  let _ = require('lodash');
  let React = require('react/addons');
  let Router = require('react-router');
  let Fluxxor = require('fluxxor');
  let FluxMixin = Fluxxor.FluxMixin(React);
  let StoreWatchMixin = Fluxxor.StoreWatchMixin;
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let mui = require('material-ui');
  let ThemeManager = new mui.Styles.ThemeManager();
  let Colors = mui.Styles.Colors;

  window._ = _;
  window.React = React;
  window.Router = Router;
  window.Fluxxor = Fluxxor;
  window.FluxMixin = FluxMixin;
  window.StoreWatchMixin = StoreWatchMixin;
  window.mui = mui;
  window.ThemeManager = ThemeManager;
  window.Colors = Colors;

  let ClassStore = require('./stores/ClassStore');
  let ClassActions = require('./actions/ClassActions');
  let stores = {
    ClassStore: new ClassStore()
  };

  let flux = new Fluxxor.Flux(stores, ClassActions);
  flux.on("dispatch", function(type, payload){
    if (console && console.log) {
      console.log("[Dispatch]", type, payload);
    }
  });

  ThemeManager.setTheme(ThemeManager.types.LIGHT);

  injectTapEventPlugin();


  let routes = require('./routes.jsx');
  let router = Router.create({routes: routes});


  router.run(function(Handler) {
    React.render(<Handler flux={flux}/>, document.body);
  });

})();
