import React, { useEffect, useState } from 'react'
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
import {message} from "antd"
import axios from 'axios'
import { baseUrl } from './helper/Helper'
import Test from './Test'
const Home = () => {

  const [testinomial,setTestinomial] = useState();
  const [locations, setLocations] = useState([]); // Stores fetched locations
  const [selectedLocation, setSelectedLocation] = useState(); // Tracks the selected location
  const[name,setName] = useState();
  const[phone,setPhone] = useState();
  const[email,setEmail] = useState();
  const[message1,setMessage] = useState();

  // console.log("name",name);
  // console.log("phone",phone);
  // console.log("email",email);
  // console.log("message",message);

  useEffect(()=>{
    fetchTestinomial();
  },[])
  
   const fetchTestinomial = async()=>{
        try {
            const response = await axios.get(baseUrl+'/api/testinomial/getTestinomial');
            // console.log("testinomial data",response.data);

            if(response.data){
              setTestinomial(response.data)
            }
        } catch (error) {

          
           console.log(error)
        }

   }

    // Fetch locations from the API on component mount
    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
      try {
          const response = await axios.get(baseUrl+"/api/locations/getLoacation");
          setLocations(response.data.locations); // Assumes API returns an array of location objects
        // console.log("response.data.locations",response.data.locations[1]?.city)
        setSelectedLocation(response.data.locations[1]?.city)
        } catch (error) {
          console.error("Error fetching locations:", error);
      }
  };


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
            massageType:"Home"
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
  
  return (
    <div>
      {/* <Test/> */}
      <Header locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
     <Navbar/>
        <SearchBar  locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
        <Croser  selectedLocation={selectedLocation}/>
        <RoadMap/>
        <Marque/>
        <DontMiss/>
        {/* <AboutDiwan/> */}
        <A  testinomial={testinomial}/>
        <Footer name={name} setName={setName} phone={phone} email={email} setPhone={setPhone} setEmail={setEmail} message={message1} setMessage={setMessage} handleFormSubmit={handleFormSubmit}/>
    </div>
  )
}

export default Home

