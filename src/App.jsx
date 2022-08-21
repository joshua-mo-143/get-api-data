import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const base = "https://covidnigeria.herokuapp.com/api";

  let newdata = {};
  const [data, setData] = useState(null);

 const getData = () => {
  axios.get(base)
  .then(res => {
    console.log(res)
    newdata = JSON.stringify(res.data)
    setData((newdata))
    console.log(data)
  })
  .catch(err => {console.log(err)})

  document.querySelector('.apidata').innerHTML = data;
 }

  return (
    <div className="App">
      <button onClick={getData}>Grab API data </button>

      <h1 className="apidata"></h1>
    </div>
  )

}

export default App
