import react  from 'react'
import Header from './Component/Header'
import Greeting from './Component/Greeting' 
import GameDescription from './Component/GameDescription'
import GameSteps from './Component/GameSteps'


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
