
import logo from "../assets/logo.png";



const Header = () => {
  return (
    <div className=" pt-10 z ">
        <div className="top_header">
      <div className="p-10 flex  justify-between  ">
      <img src={logo} alt=" loaded" className="z-20"/>
      <button  className="purchase_button bg-white hover:bg-zinc-300  p-5 w-52 rounded-md  mr-20 z-20">Purchase Now</button>
      </div>
    </div>
        

        <div className="flex gap-40 z-auto">
          <div className="ml-40">
            <h3 className=  "  text_gradient text_color font-sora-Bold z-20" >Transform Your<br/> Website</h3>
            <h5 className="text_color  ">With Motion Art<br/> Effect</h5>
          </div>

         <div className="text-white text-left font-semibold text-7xl z-20">
          <h1>Attract Your</h1>
          <h1>Visitors Attenstion</h1>
          <h1>With Colorful</h1>
          <h1 className="text_gradient">Motion Art Effect</h1>
         </div>
        </div>
 
        <div className="paragraph_area text-zinc-500 font-medium  text-lg z-20">
        <p  >Unleash the power of creativity With Motion Artfor Element-your<br/>
           ultimate solution for seamlessly integrating captivating animations<br/> 
           into your Website.</p>
        </div>
        </div>

);
};
export default Header;


         

          





     

     

    

      
      
