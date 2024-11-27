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
import { message } from 'antd'
const Properties = () => {
  const [testinomial,setTestinomial] = useState();
  const[data,setData] = useState()
  const { id } = useParams();


  const[name,setName] = useState();
  const[phone,setPhone] = useState();
  const[email,setEmail] = useState();
  const[message1,setMessage] = useState();


  const handleFormSubmit= async(e)=>{
    e.preventDefault();
     try {

        if(!name){
          message.error("Please Fill Name")
          return
        }

        if(!phone){
          message.error("Please Fill Phone")
          return
        }

        if(!email){
          message.error("Please Fill Email")
          return
        }

        if(!message1){
          message.error("Please Fill Message")
          return
        }

         const postData={
            name:name,
            phone:phone,
            email:email,
            massage:message1,
            massageType:"Propeties Section"
         }

         const response = await axios.post(baseUrl +'/api/contact/createContact',postData);
        //  console.log(response.data);
        if(response.data){
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          // message.success('Amenities fetched successfully!');
          message.success("Request Submitted Successfully")

        }

     } catch (error) {
         console.log(error)
     }
  }

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
    <div>
        <PropNav/>
        <BuilderIcon/>
        <ImageSection images={data?.images}/>
       <ProHeader/>
       <HeaderMainSection data={data} id={id}/>
       <DontMiss/>
       <A  testinomial={testinomial}/>
       <Footer name={name} setName={setName} phone={phone} email={email} setPhone={setPhone} setEmail={setEmail} message={message1} setMessage={setMessage} handleFormSubmit={handleFormSubmit}/>


    </div>
  )
}

export default Properties
