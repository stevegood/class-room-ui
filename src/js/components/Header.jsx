let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;

let menuItems = [
  {
    text: 'Home',
    route: 'home'
  }, {
    text: 'Classes',
    route: 'class-list'
  }
];

class Header extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() {
    let styles = {
      position: 'fixed'
    }
    return (
      <div>
        <LeftNav docked={false} isInitiallyOpen={false} menuItems={menuItems} onChange={this._onLeftNavChange} ref="leftNav" selectedIndex={this._getSelectedIndex()}/>
        <AppBar onLeftIconButtonTouchTap={this.toggle} style={styles} title={this.props.title}/>
      </div>
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route))
        return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }
};

Header.contextTypes = {
  router: React.PropTypes.func
};

Header.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Header;
