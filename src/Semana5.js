import './App.css';
import {
  HashRouter as Router,
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

/******************** CONTINUACIÓN CLASE MARTES 23 ***************/

import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topics from "./components/comp";
import Layout from './components/Layout';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Estas son las tres formas de hacer las rutas: en una sola linea con render,
            con un componente importado y la forma tradicional -usada en caso que el route tenga un componente hijo */}

          <Route exact path="/" render={() => <Layout><p>Esta es mi ruta Home</p></Layout>} /> 
          <Route path="/topics" component={Topics}/>
          <Route path="/about">
              <Layout><p>Este es about y quiero ver mi ruta</p></Layout>
          </Route>
          <Route path="*">
            Error 404 Not Found
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ flexBasis: 200 }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </div>
            <div style={{flex: 1}}>
                {children}
            </div>            
        </div>
    )
}

export default Layout

import React from 'react';
import Layout from './Layout';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';

const Topic = () => {
    let { topicId } = useParams();
    return <p>Este es mi tema {topicId}</p>
}

const getDataFromAPI = [
    {
        topic: "react",
        title: "Learn React"
    },
    {
        topic: "redux",
        title: "Learn Redux"
    },
    {
        topic: "router",
        title: "Learn React-router"
    },
    {
        topic: "unity",
        title: "Learn Unity"
    }
];
 
const Topics = () => {
    let { path, url } = useRouteMatch();
    return (
        <Layout>
            <ul>
                {getDataFromAPI.map((value) => <li><Link to={`${url}/${value.topic}`}>{value.title}</Link></li>)}
            </ul>

            <Switch>
                <Route exact path={`${path}`}>
                    Esta es mi ruta Topics
                </Route>
                <Route path={`${path}/:topicId`} component={Topic}/>  
                
                {/* Usando el hook useParams se crea un 
                    componente dinámico en lugar de crear una ruta por cada tema*/}
            </Switch>
        </Layout>
    )
};

export default Topics



/******************** EJERCICIO CLASE MARTES 23 **********************/

import './App.css';
import PostContainer from './components/PostContainer'



function App() {

  return (
    <div className="App">
      <h1>El increíble blog de Bender el Robot</h1>
      <img src="https://memegenerator.net/img/images/5906307.jpg" alt="bender-blog"/>
      <PostContainer />
    </div>
  );
}

export default App;

/********* COMPONENTES

/*********** POSTCONTAINER, POSTLIST, POSTDETAILS **********/

/********************* CLASE MIÉRCOLES 24 ***********/

const PrivateRoute = ({ children, ...props }) => {
    let auth = useAuth();
    
    return (
      <Route
        {...props}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
}

/* Todos los componentes tiene una prop 'children', que se renderiza dentro del componente, ya sea usando etiquetas de
apertura y cierre, o usando etiqueta de una sola línea */

const TieneChildren = ({ children }) => {
    return (
      <div>
        Estoy renderizando mi componente TieneChildren <br />
        { children }
      </div>
    )
}
  
function App() {
    return (
        <div className="App">
        <TieneChildren children={"Yo soy el HIJO"}/>
        <TieneChildren>
            Yo soy el HIjo
        </TieneChildren>
        </div>
    );
}