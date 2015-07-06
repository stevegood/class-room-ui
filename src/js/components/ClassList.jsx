let {
  MenuItem
} = mui;

let Link = Router.Link;

let PageWithNav = require('./PageWithNav.jsx');

let menuItems = [
  {
    text: 'This Month\'s Classes',
    route: 'this-months-classes'
  }, {
    type: MenuItem.Types.SUBHEADER,
    text: 'Tags'
  }, {
    text: 'JavaScript',
    route: 'tagged-classes',
    params: {tag:'javascript'}
  }, {
    text: 'Spring Boot',
    route: 'tagged-classes',
    params: {tag: 'spring-boot'}
  }
];

let ClassList = React.createClass({
  render: function() {
    return (
      <PageWithNav menuItems={menuItems} title="Available Classes"/>
    );
  }
});

module.exports = ClassList;
