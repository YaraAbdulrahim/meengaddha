import { useState } from 'react'
import img from '../public/img.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img src={img} alt="" />
    </>
  )
}

export default App
