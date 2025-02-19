import React from 'react'

function HomeComponent3() {
  return (
    <div className='min-h-[10px] bobo overflow-hidden'>
        {/* For small Screen Size Phones  */}
        <div className='h-[280px] bg-mybg w-full px-1 text-center flex flex-col gap-3.5 items-center justify-center md:hidden'>
           <section className=''>
                <h2 className='text-heading font-semibold  text-primaryColor'>$30 million</h2>
                <p className='text-[white] font-medium text-screenSize'>Total deposit in October 2023</p>
           </section>
           <section>
                <h2 className='text-heading font-semibold text-primaryColor'>100K</h2>
                <p className='text-[white] font-medium text-screenSize'>Total investors in 2023</p>
           </section>
           <section>
                <h2 className='text-heading font-semibold text-primaryColor'>$103.5 million</h2>
                <p className='text-[white] font-medium  text-screenSize'>Total withdraw in October 2023</p>
           </section>

        </div>

        {/* For medium Screen Size Phones like ipads */}
        <div className='h-[200px] bg-mybg w-full hidden md:grid grid-cols-3 divide-blue-100 divide-x-2 lg:hidden px-1'>
            <section className='flex flex-col  items-center justify-center'>
                <h2 className='text-heading font-semibold  text-primaryColor'>$30 million</h2>
                <p className='text-[white] font-medium text-screenSize'>Total deposit in October 2023</p>
           </section>
           <section className='flex flex-col items-center justify-center '>
                <h2 className='text-heading font-semibold text-primaryColor'>100K</h2>
                <p className='text-[white] font-medium text-screenSize'>Total investors in 2023</p>
           </section>
           <section className='flex flex-col items-center justify-center mt-6'>
                <h2 className='text-heading font-semibold text-primaryColor '>$103.5 million</h2>
                <p className='text-[white] font-medium  text-screenSize text-center '>Total withdraw in October  <br /> 2023</p>
           </section>
        </div>

        {/* For Bigger Screens Like Laptops  */}
        <div className='h-[140px] -mt-1.5  hidden md:hidden w-full lg:grid grid-cols-4  -skew-x-6'>
            <div className=' col-span-1 bg-primaryColor -skew-x-6'>
                
            </div>
            <div className='col-span-3 bg-mybg  grid grid-cols-3 divide-blue-100 divide-x-2'>
                <section className='flex  flex-col justify-center items-center'>
                    <h2 className='text-heading font-semibold  text-primaryColor'>$30 million</h2>
                    <p className='text-[white] font-medium text-screenSize'>Total deposit in October 2023</p>
                 </section>
                 <section className='flex  flex-col justify-center items-center'>
                    <h2 className='text-heading font-semibold text-primaryColor'>100K</h2>
                    <p className='text-[white] font-medium text-screenSize'>Total investors in 2023</p>
                </section>
                <section className='flex  flex-col justify-center items-center'>
                    <h2 className='text-heading font-semibold text-primaryColor'>$103.5 million</h2>
                    <p className='text-[white] font-medium  text-screenSize'>Total withdraw in October 2023</p>
                </section>

            </div>

        </div>
    </div>
  )
}

export default HomeComponent3