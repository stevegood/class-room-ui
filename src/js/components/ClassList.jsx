let { MenuItem } = mui;
let PageWithNav = require('./PageWithNav.jsx');

let menuItems = [
  {text: 'This Month\'s Classes', route: 'this-months-classes'},
  {type: MenuItem.Types.SUBHEADER, text: 'Tags'},
  {text: 'JavaScript', route: 'javascript'},
  {text: 'Spring Boot', route: 'spring-boot'}
];

let ClassList = React.createClass({
  mixins: [
    FluxMixin
  ],
  render: function() {
    return (
      <PageWithNav title="Available Classes" menuItems={menuItems} />
    );
  }
});

module.exports = ClassList;
