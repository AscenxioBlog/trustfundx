import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../../ButtonFolder/CustomBtn'
// import Logo from '../assets/logo.png'

function Header() {
  return (
    <div>
            <div className='h-[65px] bg-[#000000]  lg:grid grid-cols-3 hidden '>
                   <div className='bg-[] '>
                        {/* <img src={Logo}/> */}
                   </div>

                   <div className='flex p-5'>
                      <ul className='font-medium flex items-center text-[15px] text-[gray] justify-center gap-7'>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/about'>About</Link></li>
                          <li><Link to='/contact'>Contact</Link></li>
                          <li><Link to='/'>Investment Plans</Link></li>
                          <li><Link to='/'>FAQs</Link></li>
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
    </div>
  )
}

export default Header
