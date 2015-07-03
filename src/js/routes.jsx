let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

let Main = require('./components/Main.jsx');
let Home = require('./components/Home.jsx');
let ClassList = require('./components/ClassList.jsx');

let routes = (
  <Route handler={Main} name="home" path="/">
    <Route path="classes" name="class-list" handler={ClassList}/>

    <DefaultRoute handler={Home} />
  </Route>
);

module.exports = routes;
