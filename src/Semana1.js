const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    const handleCounterIncrement = () => {
      setCounter(counter + 1);
    }
  
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={handleCounterIncrement}>+1</button>
      </div>
    )
}
  
const BoilingWater = () => {
  
    const [isBoiling, setBoiling] = useState(false);
  
    const handleBoiling = (event) => {
  
      const value = event.target.value;
  
      if(value >= 100) {
          setBoiling(true)
      } else {
        setBoiling(false)
      }
    }
  
    return (
      <div>
        <input onChange={handleBoiling}/>Set temperature
        <p>
          The water would {isBoiling ? '' : 'NOT'} boil;
        </p>
      </div>
    )
}
  





const Bulb = () => {
    const [light, setLight] = useState(true);
  
    const handleLightOn = () => {
      setLight(!light);
    }
    return (
      <div>
      <p> Light is {light ? 'ON' : 'OFF'}</p>
      <button onClick={handleLightOn}>Switch</button>
      </div>
    )
}

