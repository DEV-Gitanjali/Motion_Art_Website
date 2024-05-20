'use client';

import Navbar from './components/Navbar'
import Header from './components/Header';
import Profile from './components/Profile';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useState } from 'react';

const App = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className='app_method bg-[#0E0F1A] '  > 
    

      <Navbar/>
      <Header/>
      <Profile/>
      <Cards/>
      <Footer/>
      <Cursor isActive={isActive}/>
    </div>
    

    

  )
}
export default App;
