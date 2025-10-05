import Header from './Header.jsx'
import Greeting from './Greeting.jsx' 
import GameDescription from './GameDescription.jsx'
import GameSteps from './GameSteps'
import Subscription from './Subscription'
import CategoriesIntro from './CategoriesIntro'
import Lifelines from './Lifelines'


export default function Homepage(){

    return(
        <>
            <Header />
            <Greeting />
            <GameDescription />
            <GameSteps/>
            <CategoriesIntro/>
            <Subscription/>
            <Lifelines/>

        </>
    )
}

