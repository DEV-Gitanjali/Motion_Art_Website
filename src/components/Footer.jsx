'use client';
import'../App.css';
import GradientCursor from './GradientCursor';
import { useState } from 'react';



const Footer = () => {
    const [isActive, setIsActive] = useState(false);

  return (
    
     <div  onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>

    <div className='Footer_design flex  flex-col md:flex-row text-white justify-between items-center md:px-10 p-3   lg:h-12 md:h-20'>
      <h4  className='text-center md:text-left mb-3 md:mb-0'>© 2024 Copywrite. All rights reserved by QodeMatrix</h4>
      <h4  className='text-center md:text-right'>Documentation
       <span className='ml-5'>Support</span></h4>
    </div>

     <GradientCursor isActive={isActive} className="absolute"/>
     </div>

       
     

    
  )
}

export default Footer
