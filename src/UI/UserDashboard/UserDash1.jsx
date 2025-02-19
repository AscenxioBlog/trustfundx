import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { FcHome } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';
import { FaProductHunt } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { GrCentos } from "react-icons/gr";
import { IoIosBasket } from "react-icons/io";
import { SiMarketo } from "react-icons/si";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";

import { GiTakeMyMoney } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Slider from "react-slick";
function UserDash1() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        navigator:false,
        cssEase: "linear"
      };

    let [firstwidth,setFirstwidth]= useState(0)
    let [secondwidth,setSecondwidth]= useState('93%')
    let [smallwidth,setSmallwidth]= useState('0px')
    let [babywidth,setBabywidth]=useState('0')

   
    
    function viewnames() {
        if (firstwidth== 0 && secondwidth =='93%') {
        setFirstwidth('200px')
        setSecondwidth('80%')
        setSmallwidth('190px')
        setBabywidth('170px')
            
        } else{
        setFirstwidth(0)
        setSecondwidth('93%')
        setSmallwidth('0px')
        setBabywidth('0')



        }
    }

    // let[dailyview,setDailyview]

    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track visibility
    const [inputType, setInputType] = useState('password'); // Track input type
  
    const handleToggle = () => {
      setIsPasswordVisible((prev) => !prev);
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };


    let [InvestmentAccordion,setInvestmentAccordion]=useState(0);
    



  return (
    <div>
       <div className=' min-h-[100vh] bg-amber-900  w-full bg-[] flex overflow-x-hidden '>
        <div className="  min-h-[100vh] min-w-[6%]  max-w-[23%] bg-primaryColor text-white hidden lg:inline-block">
            <div className=" h-[80px] min-w-[70px] max-w-[270px] bg-primaryColor flex  ">

            <div className="aa h-[60px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[50px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard' className=' text-[35px] flex justify-center items-center'><GrCentos /></Link></div>
                <Link><div className=" h-[50px]  flex items-center font-semibold cc" style={{width:smallwidth,transition:'1s'}}>Dashboard</div></Link>
            </div>
          
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end mt-3">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard' className=' text-[30px]'><FcHome /></Link></div>
                <Link to='/dashboard'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Dashboard</div></Link>
            </div>



           <div className=" min-h-[55px]">
           <div
           onClick={()=>{
            if (InvestmentAccordion == 0) {
            setInvestmentAccordion('100px')
                
            } else {
                setInvestmentAccordion(0)
            }
           
           }}
           className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end ">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link className=' text-[30px]'><GiTakeMyMoney /></Link></div>
                <Link to=''><div className=" h-[55px]  flex items-center font-semibold justify-between cc" style={{width:babywidth, transition:'0.3s'}}>Investment <span className=' text-[25px]'><MdKeyboardArrowDown /></span></div></Link>


                
            </div>
            <div className="  w-full  grid" style={{height:InvestmentAccordion, transition:'1s'}}>
                {/* <div className=" bg-amber-200 flex justify-center">
                    <span></span>
                     <span>Investment plan</span>
                </div>
                <div className=" bg-amber-100 flex justify-center">
                <span></span>
                <span>Investment plan</span>
                </div> */}

                <div className="aa  min-w-[70px] max-w-[270px] overflow-hidden flex justify-end text-black">
                    <div className="  w-[60px]  flex items-center bg-amber-50 justify-center " style={{borderTopLeftRadius:'30px'}}> <Link to='/dashboard/addstaff' className=' text-[30px]'><MdKeyboardDoubleArrowRight /></Link></div>
                    <Link  to=''><div className=" h-[55px] bg-amber-50  flex items-center font-semibold " style={{width:babywidth, transition:'0.3s'}}>Investment Plan</div></Link>
                </div>


                <div className="aa min-w-[70px] max-w-[270px] overflow-hidden flex justify-end text-black">
                    <div className="  w-[60px] bg-amber-50  flex items-center justify-center " style={{borderBottomLeftRadius:'30px'}}> <Link to='' className=' text-[30px]'><MdKeyboardDoubleArrowRight /></Link></div>
                    <Link  to=''><div className=" h-[55px] bg-amber-50  flex items-center font-semibold " style={{width:babywidth, transition:'0.3s'}}>Investment Log</div></Link>
                </div>


                </div>
           </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/addstaff' className=' text-[30px]'><RiUserAddFill /></Link></div>
                <Link  to=''><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Deposit</div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link  to='/dashboard/vieworder' className=' text-[30px]'><IoIosBasket /></Link></div>
                <Link to=''><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Withdraw</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/viewproduct' className=' text-[30px]'><SiMarketo /></Link></div>
                <Link to='/dashboard/viewproduct'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Transfer Money</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px] flex items-center justify-center bb"> <Link to='/dashboard/viewuser' className=' text-[30px]'><FaUsersViewfinder /></Link></div>
                <Link to='/dashboard/viewuser'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Connect Wallet</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/viewstaff' className=' text-[30px]'><FaUsersGear /></Link></div>
                <Link to='/dashboard/viewstaff'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Money Transfer Log</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Interest log</div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Transaction log</div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Refferal log</div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>2fa </div></Link>
            </div>

            <div className="aa h-[55px] min-w-[70px] max-w-[270px] overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link to='/dashboard/adminprofile' className=' text-[30px]'><IoSettings /></Link></div>
                <Link to='/dashboard/adminprofile'><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}> Support</div></Link>
            </div>


            <div className="aa h-[55px] min-w-[70px] max-w-[270px]  overflow-hidden flex justify-end">
                <div className=" h-[55px] w-[60px]  flex items-center justify-center bb"> <Link className=' text-[30px]'><LiaSignOutAltSolid /></Link></div>
                <Link><div className=" h-[55px]  flex items-center font-semibold cc" style={{width:babywidth, transition:'0.3s'}}>Log Out</div></Link>
            </div>
           
        </div>




        <div className=" h-[100vh] md:h-[100vh] lg:h-[100vh]  bg-[]" style={{width:secondwidth, transition:'1s'}}>
            <div className=" h-[80px] w-full bg-[cadetblue] flex justify-between items-center">

                {/* small screen btn */}
                <button  className=" inline-block lg:hidden text-[30px]"><LuMenu /></button>

                {/* large screen btn */}
                <button onClick={viewnames} className=" hidden lg:inline-block text-[30px]"><LuMenu /></button>

                <div className=" h-[50px] w-[500px] bg-[] hidden lg:inline-block">
                <div className="slider-container  h-[50px] flex flex-col justify-center pt-4 text-btncolor">
      <Slider {...settings}>
        <div className=" h-[30px] flex items-center font-semibold "> YOU'RE</div>
        <div className=" h-[30px] flex items-center font-semibold "> WELCOME</div>
        <div className=" h-[30px] flex items-center font-semibold "> TO</div>
        <div className=" h-[30px] flex items-center font-semibold "> CASH UP </div>
        <div className=" h-[30px] flex items-center font-semibold "> DASHBOARD</div>
      </Slider>
    </div>
                </div>
                <div className=" h-[50px] w-[50px] bg-slate-800 rounded-[50%] overflow-hidden mr-3">
                    {/* <img src={devpics} alt="" /> */}
                </div>
            </div>




<div className="hide-scrollbar h-[450px] md:h-[79vh]  w-full  ">
    {/* <Outlet/> */}
</div>

            {/* <div className=" h-[450px]  md:min-h-[900px] lg:h-[450px]  w-full bg-[green] overflow-hidden "> */}
                {/* <Outlet/> */}
            {/* </div> */}

    
        </div>



      
    </div>
    </div>
  )
}

export default UserDash1
