import React from 'react'
import Header from './partials/Header'
import { Outlet } from 'react-router-dom'
import Footer from './partials/Footer'
import Copyright from './partials/Copyright'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Copyright />
        </>
    )
}

export default Layout
