import'../App.css';
import img11 from "../assets/img11.png";
import img10 from "../assets/img10.png";
import img8 from "../assets/img8.png";
import CardGroup from './CardGroup';





const Cards = () => {
  return (
    <div className='text-white '>
      <h1 className='text-center md:mt-28 lg:text-5xl  text-3xl md:text-4xl font-medium mt-12'>Apply  On Any Section Or Enable<br/> For Whole Page</h1>

{/* this is the two big cards  for apply */}
      <div className='flex  md:mt-20 gap-10 lg:gap-4 md:mt-20 flex-col lg:flex-row px-4 md:px-20  '>
        <div className='cards_design shadow-white  font-medium rounded-3xl p-6 '>
            <h1 className='md:text-2xl mb-4 text-xl '>Apply On Sectcion</h1>
            <p className='md:text-lg  text-base  mb-4 text-zinc-400 m-7'>Apply on section is a game-changer, offering an unparalleled way to manage<br/>
             aplication directly from your website.
            </p>
                <img src={img11} alt="loaded "  className='m-auto lg:h-80 md:h-60 h-40'/>
        </div>
            

        <div className='cards_design shadow-white  font-medium rounded-3xl lg:mt-32 p-6 mt-10'>
            <h1 className='md:text-2xl text-xl mb-4'>Apply On Page</h1>
            <p className='md:text-lg text-base text-zinc-400 m-7'>
                Take your Website to new heights with Motion Art for Elementor. Embrace the power of the motion and animation.
            </p>
                <img src={img10} alt="loaded "  className='m-auto  md:h-60 lg:h-80'/>
        </div>

      </div>
       {/* this is the third popular browser card */}
        <div className='cards_design1 shadow-white  font-medium rounded-3xl lg:mt-32 p-6 mt-10  lg:mt-32  lg:w-3/4 lg:h-80  md:w-96 md:h-56 lg:ml-auto '>
            <h1 className='md:text-2xl text-center  text-xl mb-6'>Supported by All Popular Browsers</h1>
            <p className='md:text-lg text-base text-zinc-400 text-center mb-4'>
                Rest assured, Motion Art is designed to be compatible<br/>  with all major web browers.
            </p>
                <img src={img8} alt="loaded "  className='m-auto mt-4 h-18 md:h-18  '/>
        </div>
            
            
        
      <CardGroup/>
        
    </div>
  )
}

export default Cards
