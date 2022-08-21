import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const base = "https://covidnigeria.herokuapp.com/api";
  const meme = "https://jsonplaceholder.typicode.com/posts";
  let newdata = {};
  const [data, setData] = useState(null);

 const getData = () => {
  axios.get(base)
  .then(res => {
    console.log(res)
    newdata = JSON.stringify(res.data.keys())
    setData((newdata))
    console.log(newdata)
    console.log(data)
  })
  .catch(err => {console.log(err)})

  document.querySelector('.apidata').innerText = newdata;
 }

  return (
    <div className="App">
      <button onClick={getData}>Grab API data </button>

      <h1 className="apidata">{Object.values(newdata)}</h1>
    </div>
  )

}

export default App
