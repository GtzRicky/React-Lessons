import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About Route</h1>
    </div>
  )
}

const FAQ = () => {
  return (
    <div>
      <h1>F.A.Q. Route</h1>
    </div>
  )
}

const Store = () => {
  return (
    <div>
      <h1>Store Route</h1>
    </div>
  )
}

const AppR = () => {
  return (
    <div>
      <h1>App Route</h1>
    </div>
  )
}

const NavigationBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">F.A.Q.</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/app">
            <AppR />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function App() {


  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
