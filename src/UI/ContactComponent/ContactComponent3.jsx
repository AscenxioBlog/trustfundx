import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";

function ContactComponent3() {
  return (
    <div>
        <div className='min-h-[200px] md:min-h-[250px] w-full earningbg mt-2 px-4 py-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:mb-0'>
            <div className='bg-mybg mt-1 flex py-2 flex-col items-center text-center gap-2 hover:-translate-y-2 transition duration-200 ease-in-out'>
                <div className='h-[50px] w-[50px] rounded-[50%] bg-primaryColor grid place-items-center mt-2'>
                    <span className='text-white text-mediumScreen'> <IoMdMail /> </span>
                </div>
                <div className=' leading-7'>
                    <h2 className='text-heading font-semibold text-primaryColor'>Chat to support</h2>
                    <p className='text-white'>Speak to our friendly team</p>
                    <a href="#" className='text-white hover:text-primaryColor'>help@algocapitals.org</a>
                </div>
            </div>
            <div className='bg-mybg flex flex-col items-center text-center py-2 gap-2 hover:-translate-y-2 transition'>
                <div className='h-[50px] w-[50px] rounded-[50%] bg-primaryColor grid place-items-center mt-2 '>
                    <span className='text-white text-mediumScreen '><FaMapMarkedAlt /></span>
                </div>
                <div className='leading-7'>
                    <h2 className='text-heading font-semibold text-primaryColor'>Visit us</h2>
                    <p className='text-white'>Visit our Headquaters</p>
                    <a href="#" className='text-white hover:text-primaryColor'>Pentre rd, wrexham cfl579</a>
                </div>
            </div>
            <div className='bg-mybg flex flex-col text-center py-2 gap-2 items-center hover:-translate-y-2 transition duration-300 ease-in'>
                <div className='h-[50px] w-[50px] rounded-[50%] bg-primaryColor grid place-items-center mt-2'>
                    <span className='text-white text-heading'><MdCall /></span>
                </div>
                <div className='leading-7'>
                    <h2 className='text-heading font-semibold text-primaryColor'>Call us</h2>
                    <p className='text-white'>Mon-Fri from 9am to 5pm</p>
                    <p className='text-white'>+44752676247</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContactComponent3