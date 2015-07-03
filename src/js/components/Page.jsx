let Header = require('./Header.jsx');
let Paper = mui.Paper;

class Page extends React.Component {
  render() {
    let styles = {
      padding: '75px 10px 10px 10px',
    };

    let header_style = {
      marginBottom: '12px',
      paddingTop: '16px',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '32px'
    };

    return (
      <div id="main-content" style={styles}>
        <h2 style={header_style}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
};

module.exports = Page;
