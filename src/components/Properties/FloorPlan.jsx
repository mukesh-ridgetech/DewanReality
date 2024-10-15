import React from 'react'
import floor from '../../../public/images/floor.png'
const FloorPlan = () => {
  return (
    <>
           <div className='floor-container'>
                    <div className='floor-container-left'>
                         <img src={floor} alt="" />
                    </div>
                    <div className='floor-container-right'>
                         <div className='floor-container-right-head'><h1>The Camellias</h1></div>
                         <div className='floor-container-right-header'>
                              <div className='floor-container-right-header-1'>
                                    <div><h1>Floor Type</h1></div>
                                    <div><h1>Floor Size (sq.ft.)</h1></div>
                              </div>
                              <div className='floor-container-right-header-2'>
                              <div><h1>4BHK</h1></div>
                              <div><h1>7196-7430</h1></div>
                              </div>


                              <div className='floor-container-right-header-2'>
                              <div><h1>5BHK</h1></div>
                              <div><h1>9000-13000</h1></div>
                              </div>


                              <div className='floor-container-right-header-2'>
                              <div><h1>6BHK</h1></div>
                              <div><h1>1000-16500</h1></div>
                              </div>
                         </div>

                         <div className='Download-container'>
                         <div className='Download-container-text'><h1>Download Floor Plan</h1></div>

                    </div>
                    </div>

                   
            </div>  
    </>
  )
}

export default FloorPlan
