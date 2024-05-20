
import  {GoArrowRight}  from "react-icons/go";
import img5 from "../assets/img5.png";

const Section = () => {
  return ( 
    <div className='md:mt-28 flex  lg:gap-52 mt-12 flex-col lg:flex-row gap-10 px-4 md:px-0'>
        <div className='lg:ml-24 flex flex-col items-center lg:items-start text-center lg:text-left'>
            <h1 className="text-white sm:font-medium text-3xl  font-semibold text-5xl  " >Turn Your Cursor into A Colorful<br/> Magic Wand & Charm your Visitors</h1>
            <p className="text-zinc-400 md:text-lg text-base mb-6 ">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br/> Your Website with visually stunning motion art elements</p>
            <button className="button_effect  w-64 md:w-72  h-12 md:h-16 flex p-4   md:text-lg rounded-3xl items-center justify-center  text-sm ">Purchase From Envato
            <GoArrowRight  className="mt-2  md:ml-4 ml-12  text-lg md:text-xl" />
            </button>
        </div>
          <div className="flex justify-center">
          <img src={img5} alt="loaded" className="w-full max-w-xs md:max-w-md lg:max-w-lg"/>

          </div>

      
    </div>
  )
}

export default Section;
