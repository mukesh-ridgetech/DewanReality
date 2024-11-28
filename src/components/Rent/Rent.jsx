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
import PropNav1 from '../Properties/PropNav1'

const Rent = () => {

  const [properties,setProperties] = useState();
  const[filterdata,setFilterData] = useState();
  const [searching,setSearching] = useState(false);
  const [price,setPrice] = useState();
  const[search,setSearch] = useState();
  const[searchData,setSearchData] = useState();
  const [testinomial,setTestinomial] = useState();
  const { id } = useParams();




  const HandleSearch = async()=>{
    try {


           const query = new URLSearchParams();
             if(price){
               // propertiesType
               query.append("minPrice", price);
             }

             if(search){
              query.append("searchQuery", search);
             }
             
             const response = await axios.get(
               `${baseUrl}/api/properties/filter?${ query.toString() }`
             );
             console.log(response.data);

             if(response.data){
              setSearching(true);
              const filteredData = response?.data?.filter(item => item.propertiesType === 'rent');
              setSearchData(filteredData)
             }
   

    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{

  if(id !=='rent')
  HandleSearch()
},[searching])

  // console.log("id is",id)
  console.log("price",price);
  console.log("search",search);



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

            const filteredData = response?.data?.filter(item => item.propertiesType === 'rent');
            setProperties(filteredData);
          }
        } catch (error) {
          console.log(error)
        }
  }





  useEffect(()=>{
    fetchTestinomial();
  },[])
  
   const fetchTestinomial = async()=>{
        try {
            const response = await axios.get(baseUrl+'/api/testinomial/getTestinomial');
            console.log("testinomial data",response.data);

            if(response.data){
              setTestinomial(response.data)
            }
        } catch (error) {

          
           console.log(error)
        }

   }

  return (
    <>

    <PropNav1/>
        {/* <PropNav/> */}
        <Search  price={price} setPrice={setPrice} search={search} setSearch={setSearch} HandleSearch={HandleSearch}/>

        {
          id==='rent'?(<>

          {
            searching?(<Menu  properties={searchData}/>):(<Menu  properties={properties}/>)
          }
        
          </>):(<>

          <Menu  properties={filterdata}/>
          
            
          </>)
        }

        {/* <RoadMap/> */}
       <DontMiss/>
        <A testinomial={testinomial}/>
        <Footer/>
        {/* <PropertyList/> */}
    </>
  )
}

export default Rent
