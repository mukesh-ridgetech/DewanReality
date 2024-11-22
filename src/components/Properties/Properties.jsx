import React, { useEffect, useState } from 'react'
import PropNav from './PropNav'
import BuilderIcon from './BuilderIcon'
import ImageSection from './ImageSection'
import ProHeader from './ProHeader'
import HeaderMainSection from './HeaderMainSection'
import Footer from '../Footer'
import A from '../A'
import DontMiss from '../DontMiss'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from '../helper/Helper'
const Properties = () => {

  const[data,setData] = useState()
  const { id } = useParams();

  useEffect(()=>{
    fetchProperties();
  },[])

  const fetchProperties= async()=>{
         try {
            const response = await axios.get(`${baseUrl}/api/properties/getById/${id}`);
            console.log(response.data);
            if(response.data){
               setData(response.data);
            }
         } catch (error) {
           console.log(error);
         }
  }
  return (
    <div>
        <PropNav/>
        <BuilderIcon/>
        <ImageSection images={data?.images}/>
       <ProHeader/>
       <HeaderMainSection data={data}/>
       <DontMiss/>
       <A/>
       <Footer/>


    </div>
  )
}

export default Properties
