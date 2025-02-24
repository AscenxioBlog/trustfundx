import React from 'react'
import CustomBtn from '../../ButtonFolder/CustomBtn'

function ContactComponent2() {
  return (
    <div>
        <div className='min-h-[400px]  w-full px-4  md:px-12'>
            <h2 className='text-center font-medium text-mediumScreen tracking-wider text-primaryColor'>We'd love to hear from you</h2>
           <section className='md:hidden'>
                <form action="" className='flex flex-col gap-5' onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder=' Your Name' required  className='h-[40px] w-full border-2 border-white rounded-b-sm mt-2 placeholder:text-white'/>
                    <input type="text" placeholder=' Your Email' required className='h-[40px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'/>
                    <input type="text" placeholder=' Subject' required className='h-[40px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'/>
                    <textarea name="" id=""  placeholder=' Your Message' required className='h-[100px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'></textarea>
                    <CustomBtn
                        height ='40px'
                        label=' Send message'
                        // backgroundColor = '#CD1818'
                        className ='w-full mb-1 rounded-sm bg-primaryColor  hover:text-primaryColor'
                    
                    />

                </form>
           </section>


           <section className='hidden md:block'>
                <form action="" className='flex flex-col gap-5' onSubmit={(e)=>e.preventDefault()}>
                    <div className='flex gap-5'>
                        <input type="text" placeholder=' Your Name' required  className='h-[50px] w-full border-2 border-white rounded-b-sm mt-2 placeholder:text-white'/>
                        <input type="text" placeholder=' Your Email' required className='h-[50px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'/>
                    </div>
                 
                    <input type="text" placeholder=' Subject' required className='h-[50px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'/>
                    <textarea name="" id=""  placeholder=' Your Message' required className='h-[100px] w-full border-white rounded-b-md border-2 mt-2 placeholder:text-white'></textarea>
                    <CustomBtn
                        height ='50px'
                        label='Send message'
                        backgroundColor = '#CD1818'
                        className ='w-full mb-1 rounded-sm '
                    
                    />

                </form>

           </section>

        </div>
    </div>
  )
}

export default ContactComponent2