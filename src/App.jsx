import React  from 'react'
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import Homepage from './components/Homepage.jsx'


function App() {


  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Signin />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
