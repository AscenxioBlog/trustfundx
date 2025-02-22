import React from 'react';
import { BsFillSendFill } from "react-icons/bs";

function NewsLetterComponent() {
  return (
    <div className='flex items-center justify-center min-h-40 px-4 py-25 '>
      <div className='text-white text-center max-w-2xl w-full'>
        <h1 className='font-medium text-3xl md:text-4xl'>Our Newsletter</h1>
        <p className='font-medium mt-3'>
          Be the first to know about our latest updates, subscribe to our newsletter!
        </p>
        
        <div className='relative mt-6 flex flex-col md:flex-row items-center justify-center w-full'>
          <input
            type='email'
            placeholder='Enter Email Here'
            className='font-medium border border-gray-300 p-4 text-[16px] rounded-md h-[50px] w-full md:w-[400px] focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
          />
          <button className='mt-3 md:mt-0 md:ml-3 bg-red-600 text-white font-medium flex items-center justify-center gap-2 p-4 rounded-md h-[50px] w-full md:w-[155px]'>
            Subscribe <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterComponent;
