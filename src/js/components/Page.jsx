let Header = require('./Header.jsx');
let Paper = mui.Paper;

class Page extends React.Component {
  render() {
    let styles = {
      padding: '75px 10px 10px 10px',
    };

    let header_style = {
      marginBottom: '12px',
      paddingTop: '16px'
    };

    let paper_style = {
      padding: '10px'
    };

    return (
      <div id="main-content" style={styles}>
        <Paper zDepth={1} style={paper_style}>
          <h1 style={header_style}>{this.props.title}</h1>
          {this.props.children}
        </Paper>
      </div>
    );
  }
};

module.exports = Page;
