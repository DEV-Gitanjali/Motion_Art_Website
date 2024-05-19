import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Profile from './components/Profile';

const App = () => {
 
  return (
    <div className='bg-[#0E0F1A] ml-0  ' > 
      <Navbar/>
      <Header/>
      <Profile/>
    </div>
  )
}

export default App;
