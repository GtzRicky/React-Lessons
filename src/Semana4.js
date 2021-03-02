import './App.css';
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit } = useForm(); 
  return (
    <div className="App">

      <form onSubmit={handleSubmit((data) => console.log(data))}>

        <input 
          type="text"
          name="task"
          ref={register}
          placeholder="Nueva tarea"
        />

        <input
          type="text"
          name="student"
          ref={register}
          placeholder="Estudiante"
        />

        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
  );
}

export default App;