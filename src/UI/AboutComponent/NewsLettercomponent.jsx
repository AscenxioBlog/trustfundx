import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

function NewsLettercomponent() {
  return (
    <div>

           <div className='min-h-64 text-white space-y-3 flex items-center justify-center flex-col'>
                  <h1 className='font-medium text-4xl text-center'>Our newsletter</h1>
                  <p className='font-medium text-center'>Be the first to know about our latest update, subscribe to our <br />
                   newsletter!</p>

                   <div className='relative mt-10'>
                          <span className="absolute inset-y-0 left-[74%] h-[60px] rounded bg-[#FF0000] w-[155px] font-medium flex items-center pointer-events-none">
                               <button className='flex p-3'>Subcribed </button><BsFillSendFill/>        
                          </span>

                          <input
                            type="text" 
                            placeholder='Enter Email Here'
                            className='font-medium border border-[gray] p-4 text-[16px] rounded-md h-[60px] w-[595px] focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary'
                          /> 
                    </div>
           </div>

    </div>
  )
}

export default NewsLettercomponent