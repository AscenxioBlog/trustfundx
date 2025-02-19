import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../../ButtonFolder/CustomBtn'

function Header() {
  return (
    <div>
            <div className='h-[70px] bg-[#000000] border-b border-amber-800 grid grid-cols-3'>
                   <div className='bg-[pink] '></div>

                   <div className='flex p-5'>
                      <ul className='font-medium flex items-center text-white justify-center gap-7'>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/about'>About</Link></li>
                          <li><Link to='/contact'>Contact</Link></li>
                          <li><Link to='/'>FAQs</Link></li>
                      </ul>
                   </div>

                   <div className='flex font-medium items-center gap-4 text-white justify-center'>
                     <CustomBtn   
                        label="SignUp"   
                     />

                     <CustomBtn 
                        height="40px"
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
