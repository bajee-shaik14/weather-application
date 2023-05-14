import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const index = () => {
  return (
      <div className='App'>
      <span className='AppLabel mb-5'>Weather App</span>
      <h2 className='sorry-msg mt-5'>Sorry, wrong input !</h2>
      <Link to="/"><button className='btn btn-outline-primary mt-5'>Home</button></Link>
    </div>
  )
}

export default index
