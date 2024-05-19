
import Navbar from './components/Navbar'
import Header from './components/Header';
import Profile from './components/Profile';
import Cards from './components/Cards';
import Footer from './components/Footer';





const App = () => {
 
  return (
    <div className='app_method bg-[#0E0F1A] ml-0 overflow-auto' > 
    
      <Navbar/>
      <Header/>
      <Profile/>
      <Cards/>
      <Footer/>
      
      
    </div>
      
        
      

  )
}

export default App;
