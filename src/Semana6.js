const sum = (x,y) => x + y;

for (let i = 0; i < 30; i++) {
    console.log(sum(2,2)); // Función pura: siempre nos dará el mismo resultado.

    console.log(Math.random()); // Función impura: nos dará diferentes resultados.
}

const state = {
    isLoading: false,
    todos: [],
}

const newState = {  // newState nos devolverá un nuevo objeto, no tocará al arreglo de state.
    ...state,
    isLoading: true,
    todos: ["nueva tarea"]
}

// REDUX CREAR TASKS (acciones)

export const setCurrentTask = task => (
    {
        type: 'ADD_TASK',
        payload: task
    }
);

// REDUX CREATE REDUCER

const INITIAL_STATE = { tasks: [] };

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state, // es IMPORTANTE SIEMPRE pasar todo el estado anterior para no tocar el original y crear una copia
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}

export default taskReducer;

// REACT CON REDUX 

import './App.css';
import { useDispatch, useSelector} from 'react-redux';

// counterReducer.js
// Instalar (npm install redux react-redux) Y (npm install --save-dev redux-devtools-extension)

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