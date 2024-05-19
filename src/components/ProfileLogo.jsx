
import img2 from "../assets/img2.png";
import img4  from "../assets/img4.png";
import img1 from "../assets/img1.png";
import  img3 from "../assets/img3.png";

const ProfileLogo = () => {
  return (
    <div className="profile_logo flex mt-24 gap-52 ">
    
      <div className="flex">
        <img src={img2} alt="img2 loaded" />
            
        <span className="ml-3 mt-5">
        <img src={img4} alt="star loaded" />
         <h3 className='text-white '><b>4.5</b> Score,9 Reviews</h3>
        </span>
      </div>
        
      <div className="flex">
        <img src={img1} alt="img1 loaded" />
            
        <span className="ml-3 mt-5">
        <img src={img4} alt="star loaded" />
         <h3 className='text-white'><b>4.5</b> Score,9 Reviews</h3>
        </span>
      </div>


      <div className="flex">
        <img src={img3} alt="img2 loaded" />
            
        <span className="ml-3 mt-5">
        <img src={img4} alt="star loaded" />
         <h3 className='text-white'><b>4.5</b> Score,9 Reviews</h3>
        </span>
      </div>


    </div>
  )
}

export default ProfileLogo
