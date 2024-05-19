import'../App.css';
import img11 from "../assets/img11.png";
import img10 from "../assets/img10.png";




const Cards = () => {
  return (
    <div className='text-white '>
      <h1 className='text-center mt-28 text-5xl  font-medium mt-28'>Apply  On Any Section Or Enable<br/> For Whole Page</h1>


      <div className='flex  mt-20 gap-4'>
        <div className='cards_design shadow-white  font-medium rounded-3xl ml-20'>
            <h1 className='text-2xl m-7'>Apply On Sectcion</h1>
            <p className='text-lg text-zinc-400 m-7'>Apply on section is a game-changer, offering an unparalleled way to manage<br/>
             aplication directly from your website.
            </p>
                <img src={img11} alt="loaded "  className='m-auto h-80'/>
        </div>
            

        <div className='cards_design shadow-white  font-medium rounded-3xl mt-32'>
            <h1 className='text-2xl m-7'>Apply On Page</h1>
            <p className='text-lg text-zinc-400 m-7'>
                Take your Website to new heights with Motion Art for Elementor. Embrace the power of the motion and animation.
            </p>
                <img src={img10} alt="loaded "  className='m-auto h-80'/>
        </div>
            

            
        
           
      </div>
    </div>
  )
}

export default Cards
