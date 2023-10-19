import React from 'react'
import Layout from '../Components/Layout/Layout'
import Home from '../Pages/home/main/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from '../Pages/contactus/Contact'
import Photos from '../Pages/gallery/Photos'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Layout />}>
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="photos" element={<Photos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
