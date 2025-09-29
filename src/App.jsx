import react  from 'react'
import Header from './Component/Header'
import Greeting from './Component/Greeting' 
import GameDescription from './Component/GameDescription'
import GameSteps from './Component/GameSteps'


function App() {

  return (
    <>
      <div>
        <Header/>
        <Greeting/>
        <GameDescription/>
        <GameSteps/>
        </div>      

    </>
  )
}

export default App
