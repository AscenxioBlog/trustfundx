import React from 'react'
import CustomBtn from '../../ButtonFolder/CustomBtn'
import { Link } from 'react-router-dom'

function HomeComponent1() {
  return (
    <div>

        {/* For Medium screen and Small Screen */}
      <div className='lg:hidden'>
      <video autoPlay loop muted src="https://edgestonetrades.com/videos/tradingvid.mp4" className='absolute headbg w-full object-cover  h-[90vh]'></video>

      <div className='min-h-[90vh] w-full text-[white] md:min-h-[60vh] lg:hidden mt-4 relative  z-10  flex justify-center items-center flex-wrap headbg'>
            <div className='  w-[88%] px-1  '>
                <div>
                    <h2 className='text-heading text-center md:text-mediumScreen font-bold tracking-wide'>Jump to the next level of finance</h2>
                    <p className='text-center font-semibold text-screenSize mt-[10px] '>
                        Algocapitals specializes in the financial market, cryptocurrencies, and consulting activities, for the benefit of their users.
                    </p>
                </div>
                <div className='flex gap-2 justify-center mt-4'>
                    <CustomBtn
                        height= '40px'
                        width = '100px'
                        label='Jump Start'
                        className=' bg-primaryColor hover:bg-mybg transition delay-150 duration-300 ease-in-out'
                        borderRadius='10px'

                    />
                     <CustomBtn
                        height= '40px'
                        width = '100px'
                        label = 'Login'
                        className=' bg-mybg text-primaryColor transition delay-100 duration-300 ease-in-out hover:bg-primaryColor hover:text-blue-800'
                        borderRadius='10px'
                    />

                    {/* <button className='h-[40px] bg-mybg text-primaryColor hover:text-[white] hover:bg-primaryColor'>hdxjck</button> */}
                </div>

            </div>
        </div>
      </div>


            {/* For Large Screen */}
            {/* the background  is also in the css */}
       <div className='hidden lg:block '>
        <video autoPlay loop muted src="https://edgestonetrades.com/videos/tradingvid.mp4" className='absolute headbg w-full object-cover  h-[90vh]'></video>
       <div className='min-h-[90vh] w-full hidden lg:flex  justify-center items-end text-[white] headbg  relative z-10'>
            <div className='min-h-[500px] w-[80%]  flex'>
                <div className='min-h-[inherit]  w-[50%] flex flex-col justify-center items-start px-2'>
                    <div>
                        <h2 className='text-start text-largeScreen font-bold tracking-wide'>                           
                            Jump to the next level of finance
                        </h2>
                        <p className='text-mediumScreen mt-[10px]'>
                         Algocapitals specializes in the financial market, cryptocurrencies, and consulting activities, for the benefit of their users.
                        </p>
                    </div>
                    <div className='flex gap-2  mt-4'>
                        <CustomBtn
                            height= '40px'
                            width = '110px'
                            label='Jump Start'
                            className=' bg-primaryColor hover:text-amber    -400 hover:bg-mybg transition delay-150 duration-300 ease-in-out '
                            borderRadius='10px'
                        />
                        <CustomBtn 
                            height= '40px'
                            width = '110px'
                            label = {<Link to='/login'>Login</Link>}
                            className=' bg-mybg text-primaryColor hover:opacity-85 transition delay-100 duration-300 ease-in-out hover:bg-[white] hover:text-primaryColor'
                            borderRadius='10px'
                        />
                    </div>
                </div>
                <div className=' min-h-[inherit] w-[50%] largebg'> 
                    {/* background image  is coming  from the external css  named largebg */}
                </div>

            </div>

        </div>
       </div>

    </div>
  )
}

export default HomeComponent1