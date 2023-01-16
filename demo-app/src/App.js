import { useState } from "react"

const App = () => {
  const [counter, setCounter] =  useState(0)
  const [cityName, setCityName] = useState("Kolkata")

  const add = () => {
    setCounter(counter+1)
  }

  const sub = () => {
    setCounter(counter-1)
  }
  
  const onChange = (event) => {
    setCityName(event.target.value)
  }

   // 1. capture data from http//https: link using axios
   // 2. convert data display the data in browser
   // 3. make our application dynamic

  return (
    <div style={{ textAlign: 'center', marginTop: 200 }}>
      <h1>{counter}</h1>
      <h3>City Name : {cityName}</h3>
      <p>
        <input value={cityName} onChange={onChange} />
      </p>
      <p>       
        <button style={{ margin: 10 }} onClick={add}>Add</button>

        <button style={{ margin: 10 }} onClick={sub}>Sub</button>

        <button style={{margin: 10}} onClick={() => {
          setCounter(0)
        }}>Reset</button>
      </p>
    </div>
  )
}

export default App;