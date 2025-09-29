import React from 'react'
import img from '../public/img.png' 
import Header from './components/Header'
import Greeting from './components/Greeting.jsx' 
import GameDescription from './components/GameDescription.jsx'
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
