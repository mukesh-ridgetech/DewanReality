import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Buy from './components/Buy/Buy';
import Properties from './components/Properties/Properties';
import Rent from './components/Rent/Rent';
import Upcomming from './components/UpcommingProject/Upcomming';

// import 'antd/dist/antd.css';
const App = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/upcomming" element={<Upcomming />} />
        <Route path="/properties/:id" element={<Properties />} />
        </Routes>
        
        
    </>
  )
}

export default App
