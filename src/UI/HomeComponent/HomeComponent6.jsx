import React from 'react'


function HomeComponent6(){
    return(
        <div>
            <div className='min-h-[100px]  w-full mt-[20px] text-center p-[20px] box-border earningbg  text-white'>
                <div className='h-[90px] flex justify-center items-center'>
                    <h2 className='text-mediumScreen font-semibold  mt-3 '>Maximise your earning and focus on other things</h2>
                </div>

                <section className='min-h-[300px] bg mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:px-4'>
                    <div className='bg-mybg flex flex-col lg:h-[280px] items-center p-4 min-h-[200px] gap-4 border-blue-300  border-2 rounded-sm'>
                        <div className='h-[40px] w-[40px] rounded-[50%] bg-primaryColor grid items-center font-bold'>
                            <h2>1</h2>
                        </div>
                        <div className='text-wrap  min-h-[100px] w-fit'>
                            <h2 className='text-heading font-semibold '>Create an account</h2>
                            <p className='text-screenSize'>With just a few clicks, you can have your account set up and have access to our investment opportunities.</p>
                        </div>
                    </div>
                    <div className='bg-mybg flex flex-col lg:h-[260px] items-center p-4  gap-3 border-2 border-blue-300 roundes-sm'>
                        <div className='h-[40px] w-[40px] rounded-[50%] bg-primaryColor grid items-center font-bold'>
                            <h2>2</h2>
                        </div>
                        <div className='text-wrap w-fit '>
                            <h2 className='text-heading font-semibold '>Choose plan</h2>
                            <p className='text-screenSize'>Choose one of our packages to get started, we have different plans to suit your needs and preferences.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center p-4 gap-3 bg-mybg border-2 border-blue-300 rounded-sm md:translate-x-[25vw] lg:translate-x-0'> 
                        <div  className='h-[40px] w-[40px] bg-primaryColor rounded-[50%] grid items-center'>
                            <h2 className='font-semibold'>3</h2>
                        </div>
                        <div className='text-wrap '>
                            <h2 className='text-heading font-semibold'>Get profit</h2>
                            <p className='text-screenSize'>Once your plan is activated, your earning will be updated automatically, Profits is available for instant withdrawal, after the given period.</p>
                        </div>
                    </div>
                </section>


            </div>

        </div>

    )
}
export default HomeComponent6