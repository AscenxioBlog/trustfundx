import React from 'react'

function ContactComponent1() {
  return (
    <div>
        <div className='text-white h-[30vh] lg:h-[45vh] bg-mybg flex flex-col justify-center items-center'>
            <h2 className='text-mediumScreen lg:text-largeScreen font-bold'>Contact</h2>
            <h2 className='text-mediumScreen text-primaryColor'>Home <span className='text-white font-medium text-screenSize'>/Contact</span></h2>
        </div>
    </div>
  )
}

export default ContactComponent1