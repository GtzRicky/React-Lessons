import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Switch>
        {/*Si la  url  actual es /about, esta ruta se renderiza mientras que el resto son ignoradas. Esto funciona como
          el Switch de Javascript, cada Route es un Case*/}

        <Route path="/about"> {/* Si lo que ingresamos en path, la ruta coincide con esto, renderiza lo que contenga el Route  */}
          <About />
        </Route>

        {/*Noten como están ordenadas estas rutas, la ruta más específica path="/contact/:id"
          viene antes que path="/contact" para que esta ruta se pueda renderizar cuando veamos los
          detalles del contacto*/}
        
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/*Si ninguna de las otras rutas renderiza, usaremos esta de respaldo
        
          Nota importante: la ruta / siempre será validada así que debe ir hasta el final
          como el default en un switch de Javascript */}

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/* ********************  EJERCICIO CLASE LUNES 22 ***********************/

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


/********************* CLASE MARTES 23 **************************/

let { path, url } = useRouteMatch();

return (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path={path}>
                <h3>Ruta base</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
                Rutas hijas de Topics
            </Route>
        </Switch>
    </div>
)