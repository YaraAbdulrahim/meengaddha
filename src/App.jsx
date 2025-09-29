import React from 'react'
import img from '../public/img.png' 
import Header from './Component/Header'
import Greeting from './Component/Greeting' 
import GameDescription from './Component/GameDescription'
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx"; 



function App() {


  return (
    <>
        <img src={img} alt="" />
        <Header />
        <Greeting />
        <GameDescription />
        <Signup />
        <Signin />

        <div className = "flex flex-col items-center justify-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Signin />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>



      
    </div>
    </>
  )
}

export default App
