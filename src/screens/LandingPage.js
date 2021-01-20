import React, {useEffect} from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Features from '../components/Feature'
import Expertise from '../components/Expertise'
import CoursesList from '../components/CoursesList'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {

    useEffect(() => {
        document.body.classList.remove("signup-page")
    })
    
    return (
        <>
            <div className="main">
                <Header />
                <Jumbotron />
                <Features />
                <Expertise />
                <CoursesList />
                <Testimonials />
                <Faq />
                <Contact />
                <Footer />
            </div>
            
        </>
    )
}

export default LandingPage