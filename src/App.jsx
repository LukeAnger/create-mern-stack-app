import React, { useState, useEffect } from 'react'
import axios from 'axios'

const query = 'batman'

axios.get(`http://localhost:8080/get?name=${query}`)
  .then(res => {
    console.log(res)
  })

axios.post(`http://localhost:8080/post`, {name: query})
.then(res => {
  console.log(res)
})


const App = () => {

  return (
    <div>Hola Mundo</div>
  )
}

export default App