import React from 'react'
import img from '../public/img.png' // this code will import the img
import Signup from './Component/signup' // this code will import the signup component



function App() {


  return (
    <>
        <img src={img} alt="" />
        <Signup/>
        <h1 className='text-3xl font-bold underline'/> 
    </>
  )
}

export default App;
