import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const TempConverter = () => {

  const [grades, setGrades] = useState(0);

  const toRadian = (grades) => {

      const input = grades.target.value; 

      return setGrades(input * 0.01745);
  }

  const toGrades = (radians) => {

      const input2 = radians.target.value;

      return setGrades(input2 * 57.296);
  }

  return (
      <div>
          <p>Set Grades</p>
          <input onChange={toRadian} placeholder={grades}/>
          <p>Set Radians</p>
          <input onChange={toGrades} placeholder={grades}/>
      </div>
  )

}

function App() {
  return (
    <div className="App">
      <h1>STATE</h1>
      <TempConverter />
    </div>
  );
}

export default App;
