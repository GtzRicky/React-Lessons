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
        
        <Layout/>

        <Switch>

          {/* Estas son las tres formas de hacer las rutas: en una sola linea con render,
            con un componente importado y la forma tradicional -usada en caso que el route tenga un componente hijo */}

          <Route exact path="/" render={() => <p>Esta es mi ruta Home</p>} /> 
          <Route path="/topics" component={Topics}/>
          <Route path="/about">
              Este es about y quiero ver mi ruta
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
