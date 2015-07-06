let DefaultRoute = Router.DefaultRoute;
let Redirect = Router.Redirect;
let Route = Router.Route;

let Main = require('./components/Main.jsx');
let Home = require('./components/Home.jsx');
let ClassDetail = require('./components/class/Detail.jsx');
let ClassList = require('./components/class/List.jsx');
let ClassesThisMonth = require('./components/class/ThisMonth.jsx');
let ClassesWithTag = require('./components/class/WithTag.jsx');

let routes = (
  <Route handler={Main} name="home" path="/">
    <Route handler={ClassList} name="class-list" path="classes">
      <Route handler={ClassesWithTag} name="classes-with-tag" path="tag/:tag" />
      <Route handler={ClassesThisMonth} name="classes-this-month" path="this-month"/>
      <Redirect from="/classes" to="classes-this-month"/>
    </Route>

    <Route handler={ClassDetail} name="class-detail" path="class/:id" />

    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
