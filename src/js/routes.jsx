let DefaultRoute = Router.DefaultRoute;
let Redirect = Router.Redirect;
let Route = Router.Route;

let Main = require('./components/Main.jsx');
let Home = require('./components/Home.jsx');
let ClassList = require('./components/ClassList.jsx');
let ThisMonthsClasses = require('./components/ThisMonthsClasses.jsx');

let routes = (
  <Route handler={Main} name="home" path="/">
    <Route handler={ClassList} name="class-list" path="classes">
      <Route handler={ThisMonthsClasses} name="this-months-classes"/>
      <Redirect from="/classes" to="this-months-classes"/>
    </Route>

    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
