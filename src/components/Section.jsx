
import  {GoArrowRight}  from "react-icons/go";
import img5 from "../assets/img5.png";

const Section = () => {
  return ( 
    <div className='mt-28 flex  gap-52'>
        <div className='ml-24'>
            <h1 className="text-white sm:font-medium text-3xl  font-semibold text-5xl  " >Turn Your Cursor into A Colorful<br/> Magic Wand & Charm your Visitors</h1>
            <p className="text-zinc-400 text-lg ">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br/> Your Website with visually stunning motion art elements</p>
            <button className="button_effect w-72 h-16 flex p-4   text-lg rounded-3xl ">Purchase From Envato
            <GoArrowRight  className="mt-2 ml-12 text-xl" />
            </button>
        </div>

        <img src={img5} alt="loaded"/>

      
    </div>
  )
}

export default Section;
