import React from 'react'
import Header from '../../../Components/Layout/partials/Header'
import Footer from '../../../Components/Layout/partials/Footer'
//Panels
import Slider from '../views/Slider'
import About from '../views/About'
import Mission from '../views/Mission'
import Events from '../views/Events'
import Charitynumber from '../views/Charitynumber'
import Latestevent from '../views/Latestevent'
import Ourteam from '../views/Ourteam'
import Testimonial from '../views/Testimonial'
import Latestproject from '../views/Latestproject'
import Copyright from '../../../Components/Layout/partials/Copyright'

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <About />
            <Mission />
            <Events />
            <Charitynumber />
            <Latestevent />
            <Ourteam />
            <Latestproject />
            <Testimonial />
            <Footer />
            <Copyright />
        </>

    )
}

export default Home
