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
import { useParams } from "react-router-dom";

const Rent = () => {

  const [properties,setProperties] = useState();
  const[filterdata,setFilterData] = useState();
  const { id } = useParams();

  console.log("id is",id)



const filterData = async()=>{
     try {
       const response = await axios.get(`${baseUrl}/api/properties/filter?${id}`);
       console.log(response.data);

       if(response.data){
        setFilterData(response.data)
       }
       
     } catch (error) {
       console.log(error);
     }
}

  useEffect(()=>{
    fetchPropeties();
    filterData()
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

        {
          id==='rent'?(<>
        <Menu  properties={properties}/>
          </>):(<>
            <Menu  properties={filterdata}/>
          </>)
        }

        {/* <RoadMap/> */}
       <DontMiss/>
        <A/>
        <Footer/>
        {/* <PropertyList/> */}
    </>
  )
}

export default Rent
