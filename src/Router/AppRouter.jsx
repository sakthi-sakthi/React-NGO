import React from 'react'
import Layout from '../Components/Layout/Layout'
import Home from '../Pages/home/main/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from '../Pages/contactus/Contact'
import Photos from '../Pages/gallery/Photos'
import Videos from '../Pages/gallery/Videos'
import History from '../Pages/aboutus/History'
import Gccteam from '../Pages/ourteam/Gccteam'
import Lccteam from '../Pages/ourteam/Lccteam'
import Nccteam from '../Pages/ourteam/Nccteam'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Layout />}>
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="history" element={<History />} />
                    <Route path="gccteam" element={<Gccteam />} />
                    <Route path="lccteam" element={<Lccteam />} />
                    <Route path="nccteam" element={<Nccteam />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
