import React from 'react'
import { FaHeartbeat, FaSearchDollar } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { LuTimerReset } from 'react-icons/lu';
import { FaArrowsSpin } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";

function HomeComponent4() {
  return (
    <div>
        {/* for Small Screen Size  */}
        <div className='min-h-[100px] text-center bg-mybg w-full'>
            <h2 className='text-heading font-bold text-primaryColor'>Why Choose us?</h2>
            <div className='min-h-[500px] bg- max-w-full grid grid-cols-1 px-2 gap-7'>
                <div className='h-[280px] bg-mybg  flex flex-col items-center px-1 group text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor mt-5 text-[white] group-hover:-translate-y-2  transition duration-200 ease-in-out text-heading h-[60px] w-[60px] grid justify-center items-center'> <FaSearchDollar /></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>Top technical analysis</h2>
                        <p className='text-screenSize  text-white'>Our professional analysts provide our users with the best market direction to make profits.</p>
                    </div>
                </div>

                <div className='h-[280px] bg-mybg  flex flex-col items-center  group  px-2 text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor text-[white] mt-5 group-hover:-translate-y-2 transition duration-200 ease-in-out text-heading h-[60px] w-[60px] grid justify-center items-center'> <FaChartBar/></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>High performance</h2>
                        <p className='text-screenSize  text-white'>Our system has the best overall performance and security, backed with the best blockchain security.</p>
                    </div>
                </div>

                    
                <div className='h-[280px] bg-mybg  flex flex-col items-center group px-2 text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor text-[white] mt-5 text-heading h-[60px] group-hover:-translate-y-2  transition ease-in duration-200 w-[60px] grid justify-center items-center'> <LuTimerReset/></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>Full expert support</h2>
                        <p className='text-screenSize  text-white'>Our expert team is available 24/7 to help you resolve any issue faced when using our platform and also future investment ideas.</p>
                    </div>
                </div>

                <div className='min-h-[250px] bg-mybg  flex flex-col items-center group px-2 text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor text-[white] mt-5 text-heading h-[60px] group-hover:-translate-y-2  transition ease-in duration-200 w-[60px] grid justify-center items-center'> <FaHeartbeat/></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>Multiple payment gateway</h2>
                        <p className='text-screenSize  text-white'>We're all about giving you control! our platform allows you to choose between automatic and manual gateways for transactions. both are great, it just depends on your mood!.</p>
                    </div>
                </div>

                <div className='min-h-[250px] bg-mybg  flex flex-col items-center group px-2 text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor text-[white] mt-5 text-heading h-[60px] group-hover:-translate-y-2  transition ease-in duration-200 w-[60px] grid justify-center items-center'> <FaArrowsSpin /></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>Highly recommended</h2>
                        <p className='text-screenSize  text-white'>Algocapital is a known name with over 200 million assets under management for individual/private investors. just like the wall street hedge funds we focus on private clients using the same methods and technologies.</p>
                    </div>
                </div>


                <div className='min-h-[250px] bg-mybg  flex flex-col items-center group px-2 text-center mt-2 rounded-[10px] gap-2.5 py-2 box-border border-2 border-blue-100'>
                    <div className='poly bg-primaryColor text-[white] mt-5 text-heading h-[60px] group-hover:-translate-y-2  transition ease-in duration-200 w-[60px] grid justify-center items-center'> <FaHeadphonesAlt /></div>
                    <div>
                        <h2 className='text-heading font-semibold text-primaryColor'>Join a growing community</h2>
                        <p className='text-screenSize  text-white'>Register today and join our community of other investors learning how the financial market works and making money same time, with zero stress</p>
                    </div>
                </div>
                

            </div>

           
        </div>
    </div>
  )
}

export default HomeComponent4