import React from 'react'
import {Outlet} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
    <NavBar />
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout