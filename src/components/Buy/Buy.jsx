import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Search from './Search'
import PropertyList from './PropertyList'
import Menu from './Menu'
import Footer from '../Footer'
import PropNav from '../Properties/PropNav'
import A from '../A'
import DontMiss from '../DontMiss'
import RoadMap from '../RoadMap'
import { baseUrl } from '../helper/Helper'
import axios from 'axios'
const Buy = () => {

  const [properties,setProperties] = useState();



  useEffect(()=>{
    fetchPropeties();
  },[])
  const fetchPropeties = async()=>{
        try {
          const response = await axios.get(baseUrl+'/api/properties/getProperties');
          console.log(response.data);

          if(response.data){
            setProperties(response.data);
          }
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <>
        <PropNav/>
        <Search/>
        <Menu  properties={properties}/>
        {/* <RoadMap/> */}
       <DontMiss/>
        <A/>
        <Footer/>
        {/* <PropertyList/> */}
    </>
  )
}

export default Buy
