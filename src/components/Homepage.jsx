import Header from './Header.jsx'
import Greeting from './Greeting.jsx' 
import GameDescription from './GameDescription.jsx'
import GameSteps from './GameSteps'
import Subscription from './Subscription'

export default function Homepage(){

    return(
        <>
            <Header />
            <Greeting />
            <GameDescription />
            <GameSteps/>
            <Subscription/>

        </>
    )
}

