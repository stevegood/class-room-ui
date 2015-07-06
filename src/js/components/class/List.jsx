let {
  MenuItem
} = mui;

let Link = Router.Link;

let PageWithNav = require('../PageWithNav.jsx');

let menuItems = [
  {
    text: 'Classes this Month',
    route: 'classes-this-month'
  }, {
    type: MenuItem.Types.SUBHEADER,
    text: 'Tags'
  }, {
    text: 'JavaScript',
    route: 'classes-with-tag',
    params: {tag:'javascript'}
  }, {
    text: 'Spring Boot',
    route: 'classes-with-tag',
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
