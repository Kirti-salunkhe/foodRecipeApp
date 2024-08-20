import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function MainNavigation() {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </>
  )
}
