import { Redirect, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <span>Le he dado click: {counter} veces</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default App;
