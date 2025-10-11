import Header from './Header.jsx'
import Greeting from './Greeting.jsx'
import Overview from './Overview.jsx'
import GameDescription from './GameDescription.jsx'
import GameSteps from './GameSteps.jsx'
import SubscriptionLanding from './SubscriptionLanding.jsx'
import CategoriesIntro from './CategoriesIntro.jsx'
import Lifelines from './Lifelines.jsx'
import Footer from './Footer.jsx'



export default function Homepage(){

    return(
        <>
            <Header/>
            <Greeting/>
            <Overview/>
            <GameDescription/>
            <GameSteps/>
            <CategoriesIntro/>
            <SubscriptionLanding/>
            <Lifelines/>
            <Footer/>

        </>
    )
}

