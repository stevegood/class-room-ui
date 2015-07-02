(function () {
  let React = require('react/addons');
  let Fluxxor = require('fluxxor');
  let FluxMixin = Fluxxor.FluxMixin(React);
  let StoreWatchMixin = Fluxxor.StoreWatchMixin;
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let mui = require('material-ui');
  let ThemeManager = new mui.Styles.ThemeManager();
  let Colors = mui.Styles.Colors;
  //Needed for React Developer Tools
  window.React = React;
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

  let Main = require('./components/main.jsx'); // Our custom react component

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main flux={flux} />, document.body);

})();
