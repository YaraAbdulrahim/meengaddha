import { useState } from 'react'
import img from '../public/img.png' // this code will import the img


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img src={img} alt="" />
    </>
  )
}

export default App
