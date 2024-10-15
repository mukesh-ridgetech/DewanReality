import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Buy from './components/Buy/Buy';
import Properties from './components/Properties/Properties';

// import 'antd/dist/antd.css';
const App = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/properties" element={<Properties />} />
        </Routes>
        
        
    </>
  )
}

export default App
