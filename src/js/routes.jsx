let DefaultRoute = Router.DefaultRoute;
let Redirect = Router.Redirect;
let Route = Router.Route;

let Main = require('./components/Main.jsx');
let Home = require('./components/Home.jsx');
let ClassList = require('./components/ClassList.jsx');
let ThisMonthsClasses = require('./components/ThisMonthsClasses.jsx');

let routes = (
  <Route handler={Main} name="home" path="/">
    <Route path="classes" name="class-list" handler={ClassList}>
      <Route name="this-months-classes" handler={ThisMonthsClasses} />
      <Redirect from="/classes" to="this-months-classes" />
    </Route>

    <DefaultRoute handler={Home} />
  </Route>
);

module.exports = routes;
