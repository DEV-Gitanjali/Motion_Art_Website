import img9 from "../assets/img9.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const CardGroup = () => {
  return (
    <div>
        
         <h1 className="text-white md:text-4xl text-3xl  font-medium  text-center  mt-10 md:mt-20 ">An All-Round Plugin with <br/> Powerful Features </h1>
       <p className='text-center text-base  md:text-lg text-zinc-400 md:mt-10 mt-6 px-4 md:px-0 '>Whether you're a seasoned web designer or just starting out,Motion Art for<br className="hidden md:block"/> Elementor seamlessly integrates with the Elementor platform, providing you<br className="hidden md:block"/> with a seamless and intuitive experience.</p>

       
       <div className='flex mt-10  flex-col md:flex-row justify-center items-center gap-6 md:gap-4 px-4 md:px-0'>
        <div className='group_Cards shadow-white  font-medium rounded-3xl  p-6 text-center md:text-left '>
                <img src={img9} alt="loaded "  className="md:ml-1 mt-1"/>
            <h1 className=' text-xl md:text-2xl ml-5 mt-5'>Light Weight</h1>
            <p className='  text-base md:text-lg text-zinc-400 mt-2 ml-7'>Motion Art Elementors is designed to be lightweight.</p>
        </div>
        <div className='group_Cards shadow-white  font-medium rounded-3xl '>
                <img src={img6} alt="loaded "  className=''/>
            <h1 className='text-2xl ml-7 mt-5'>100% Responsive</h1>
            <p className='text-lg text-zinc-400 mt-2 ml-7'>Create a consistent visual experience across all devices .</p>
        </div>
        <div className='group_Cards shadow-white  font-medium rounded-3xl '>
                <img src={img7} alt="loaded "  className=''/>
            <h1 className='text-2xl ml-7 mt-5'>User Friendly Interface</h1>
            <p className='text-lg text-zinc-400 mt-2 ml-7'>Ensure a smooth experience for both applicants and administrators.</p>
        </div>
        </div>

        
    </div>
  )
}

export default CardGroup
