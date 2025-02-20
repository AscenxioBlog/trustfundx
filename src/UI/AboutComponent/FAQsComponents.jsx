import React from 'react'
import { useState } from 'react'

function FAQsComponents() {

  const [account,newAccount]=useState("0px")

function boy1() {
    if (account =="0px") {
        newAccount("100px")
       

    } else {
        newAccount("0px")
    }
}

  return (
    <div>

            <div className='lg:min-h-[70vh] text-white'>
                    <h1 className='font-medium text-4xl'>Frequently Asked Questions</h1>
                    <p className='font-medium mt-5'>Have Any Question?</p>
                    
                    <div className='min-h-[50vh] mt-12 gap-9 mx-6 grid grid-cols-2'>
                         <div>
                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>


                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>


                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>

                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>

                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>
                         </div>



                         <div>
                             <div className='bg-[#000000] overflow-hidden'>
                                    <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                        
                                        <p> How do I create my account?</p>
                                    </div>

                                    <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                    </p>
                            </div>


                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>
                            

                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>

                            <div className='bg-[#000000] overflow-hidden'>
                                <div className='h-[70px] items-center font-medium flex' onClick={boy1}>
                                       
                                       <p> How do I create my account?</p>
                                </div>

                                <p className='font-medium h-[0] m-0 bg-[#000000] ' style={{height:account,transition:"1s"}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo debitis nulla natus ullam odio in, ipsa dicta explicabo vitae aut eum soluta sit. Distinctio, magni eius! Fuga, ducimus nisi.
                                </p>
                            </div>
                         </div>
                    </div>
                <div>

                </div>
            </div>

    </div>
  )
}

export default FAQsComponents