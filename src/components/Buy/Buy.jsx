import React from 'react'
import Navbar from '../Navbar'
import Search from './Search'
import PropertyList from './PropertyList'
import Menu from './Menu'
import Footer from '../Footer'
import PropNav from '../Properties/PropNav'
import A from '../A'
import DontMiss from '../DontMiss'
import RoadMap from '../RoadMap'
const Buy = () => {
  return (
    <>
        <PropNav/>
        <Search/>
        <Menu/>
        {/* <RoadMap/> */}
       <DontMiss/>
        <A/>
        <Footer/>
        {/* <PropertyList/> */}
    </>
  )
}

export default Buy
