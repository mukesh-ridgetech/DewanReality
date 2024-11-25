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
import axios from 'axios'
import { baseUrl } from './helper/Helper'
const Home = () => {

  const [testinomial,setTestinomial] = useState();
  const [locations, setLocations] = useState([]); // Stores fetched locations
  const [selectedLocation, setSelectedLocation] = useState("Gurugram"); // Tracks the selected location


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

    // Fetch locations from the API on component mount
    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
      try {
          const response = await axios.get(baseUrl+"/api/locations/getLoacation");
          setLocations(response.data.locations); // Assumes API returns an array of location objects
      
      
        } catch (error) {
          console.error("Error fetching locations:", error);
      }
  };
  
  return (
    <div>
      
      <Header locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
     <Navbar/>
        <SearchBar  locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
        <Croser/>
        <RoadMap/>
        <Marque/>
        <DontMiss/>
        {/* <AboutDiwan/> */}
        <A  testinomial={testinomial}/>
        <Footer/>
    </div>
  )
}

export default Home

