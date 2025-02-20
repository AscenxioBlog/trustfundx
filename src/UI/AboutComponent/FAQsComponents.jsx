import React from 'react'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";``

function FAQsComponents() {

  const [account,newAccount]=useState("0px")

function boy1() {
    if (account =="0px") {
        newAccount("130px")
       

    } else {
        newAccount("0px")
    }
}

  return (
    <div>

            <div className='lg:min-h-[70vh] text-white'>
                    <h1 className='font-medium text-4xl'>Frequently Asked Questions</h1>
                    <p className='font-medium mt-5'>Have Any Question?</p>
                    
                    <div className='lg:min-h-[50vh] lg:w-[700px] mt-12'>
                       <div>
                            <div className='bg-[white] rounded overflow-hidden'>
                                <div className='h-[70px] items-center border-b border-[gray] mx-12 font-medium flex' onClick={boy1}>
                                   <FaPlus />
                                    <button className='text-[#FF0000] text-[18px]'> How to Withdraw Money?</button>
                                </div>

                                <p className='h-[0] m-0 bg-[white] mt-3 mx-4 font-medium text-[black] text-[14px] ' style={{height:account,transition:"1s"}}>
                                    To withdraw money from your account, you can follow these steps: 1. Log in to your account. 2. Go to the
                                    withdrawal section. 3. Select the amount you want to withdraw (yes there’s limitations on each plan). 4. 
                                    Choose your preferred withdrawal method. 5. Confirm the withdrawal request. 6. Wait for the processing 
                                    and approval of your withdrawal request. 7. Once approved, the money will be transferred to your chosen 
                                    withdrawal met                                
                                </p>
                            </div> 
                        </div>
                    </div>
             </div>

    </div>
  )
}

export default FAQsComponents