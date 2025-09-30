import Header from './Header.jsx'
import Greeting from './Greeting.jsx' 
import GameDescription from './GameDescription.jsx'
import GameSteps from './components/GameSteps'

export default function Homepage(){

    return(
        <>
            <Header />
            <Greeting />
            <GameDescription />
            <GameSteps/>

        </>
    )
}

