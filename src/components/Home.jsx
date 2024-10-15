import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Croser from './Croser'
import RoadMap from './RoadMap'
import Marque from './Marque'
import DontMiss from './DontMiss'
import AboutDiwan from './About-DIwan/AboutDiwan'
import Footer from './Footer'
import SearchBar from './SearchBar'
import A from './A'
import '../App.css'
const Home = () => {
  return (
    <div>
      
      <Header/>
     <Navbar/>
        <SearchBar/>
        <Croser/>
        <RoadMap/>
        <Marque/>
        <DontMiss/>
        {/* <AboutDiwan/> */}
        <A/>
        <Footer/>
    </div>
  )
}

export default Home

