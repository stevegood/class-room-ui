let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;

let Header = React.createClass({
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

  render: function() {
    let styles = {
      position: 'fixed'
    }

    let menu_items = [
      {text: 'Home'},
      {text: 'New Class'}
    ];

    return (
      <div>
        <LeftNav docked={false} menuItems={menu_items} ref="leftNav" />
        <AppBar title="Class Room Organizer" style={styles}
                onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
      </div>
    );
  },

  _onLeftIconButtonTouchTap: function(e) {
    this.refs.leftNav.toggle();
  }
});

module.exports = Header;
