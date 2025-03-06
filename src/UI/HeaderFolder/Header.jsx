import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../../ButtonFolder/CustomBtn'
import { RiHome5Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuScanText } from "react-icons/lu";
import { FaEllipsisH } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";


function Header() {
  return (
    <div>
            <div className='h-[65px] bg-[#000000]  lg:grid grid-cols-3 hidden'>
                   <div className='bg-[] '>
                        {/* <img src={Logo}/> */}
                   </div>

                   <div className='flex p-5'>
                      <ul className='font-medium flex items-center text-[15px] text-[gray] justify-center gap-7'>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/about'>About</Link></li>
                          <li><Link to='/contact'>Contact</Link></li>
                          <li><Link to='/investmentplan'>Investment Plans</Link></li>
                      </ul>
                   </div>

                   <div className='flex font-medium items-center gap-4 text-[gray] justify-center'>
                     <CustomBtn   
                        label="SignUp"   
                     />

                     <CustomBtn 
                        height="35px"
                        width="110px"
                        label="Login"
                        backgroundColor="#FF0000"
                        borderRadius="5px"
                     />
                   </div>
            </div>

<div className="fixed bottom-0 h-[75px] z-20 w-full bg-white font-medium shadow-md p-2 flex justify-around items-center lg:hidden">
      <div className="flex flex-col items-center text-gray-600">
        <RiHome5Fill size={27} />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaMoneyBillTransfer size={27} />
        <span className="text-xs">Transfer</span>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-6 bg-[#FF0000] text-white rounded-full p-4 clip-path-circle">
          <LuScanText size={30} />
        </div>
        <div className=" text-gray-600 rounded-full p-3 mt-7">
          <span className="text-xs">MoMo Pay</span>
        </div>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaAddressBook size={27} />
        <span className="text-xs">Contact</span>
      </div>
      <div className="flex flex-col items-center text-gray-600">
        <FaEllipsisH size={27} />
        <span className="text-xs">More</span>
      </div>
    </div>
    </div>
  )
}

export default Header
