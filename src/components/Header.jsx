
import logo from "../assets/logo.png";
import fonts from "../assets/fonts";


const Header = () => {
  return (
    <div className=" bg-[#0E0F1A] h-screen ">
        <div className="top_header">
      <div className="p-10 flex  justify-between  ">
      <img src={logo} alt=" loaded"/>
      <button  className="bg-white  p-5 w-52 rounded-md  mr-20">Purchase Now</button>
      </div>
    </div>
        

        <div>
          <div>
            <h3 className="text_color font-sora-Bold ">Transform Your<br/> Website</h3>
            <h5 className=" ">With Motion Art<br/> Effect</h5>
          </div>
        </div>


        </div>

     
    );

     

    

      
      
};

export default Header;