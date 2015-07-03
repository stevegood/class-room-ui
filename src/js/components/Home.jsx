let Page = require('./Page.jsx');

let Home = React.createClass({
  render: function() {
    return (
      <Page className="home" title="Welcome!">
        <p>Welcome to the Class Room Organizer. Please browse the available classes or create one of your own!</p>
      </Page>
    );
  }
});

module.exports = Home;
