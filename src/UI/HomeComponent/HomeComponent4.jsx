import React from 'react'
import { FaSearchDollar } from "react-icons/fa";

function HomeComponent4() {
  return (
    <div>
        {/* for Small Screen Size  */}
        <div className='min-h-[100px] text-center bg-amber-400 w-full'>
            <h2 className='text-heading font-bold text-primaryColor'>Why Choose us</h2>
            <div className='min-h-[500px] bg-blue-500 max-w-full grid grid-cols-1 px-2 gap-1'>
                <div className='h-[200px] bg-red-300  flex flex-col items-center mt-2 rounded-[10px] gap-2.5 py-2 box-border'>
                    <div className='poly bg-amber-950 h-[50px] w-[50px] '> <FaSearchDollar /></div>
                    <div>
                        <h2>Top technical analysis</h2>
                        <p>Our professional analysts provide our users with the best market direction to make profits.</p>
                    </div>

                </div>
                

            </div>

           
        </div>
    </div>
  )
}

export default HomeComponent4