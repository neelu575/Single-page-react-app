import React from 'react'
import Header from '../Components/HeaderSection'
import Main from '../Components/MainSection'
import Nav from '../Components/NavSection'
import Footer from '../Components/FooterSection'
const HomePage = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Main />
                <Nav />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
