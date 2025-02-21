import React from 'react'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function FAQsComponents() {

  const [withdraw, setWithdraw] = useState("0px")
  const [deposit, setDeposit] = useState("0px")

  const [icon,setIcon]=useState("block")
  const [iconn,setIconn]=useState("none")
  const [iconD,setIconD]=useState("block")
  const [iconnD,setIconnD]=useState("none")

function Withdraw() {
    if (withdraw == "0px") {
        setWithdraw("130px")
        setDeposit("0px")
        setIcon("none")
        setIconn("block")
        setIconD("block")
        setIconnD("none")
       
    } else {
        setWithdraw("0px")
        setIcon("block")
        setIconn("none")

    }    
}

    function Deposit() {
        if (deposit == "0px") {
            setDeposit("80px")
            setIconD("none")
            setIconnD("block")
            setWithdraw("0px")
            setIcon("block")
            setIconn("none")

            
        } else {
            setDeposit("0px")
            setIconD("block")
            setIconnD("none")
            
        }
}

  return (
    <div>

            <div className='lg:min-h-[70vh] text-white'>
                    <h1 className='font-medium text-4xl'>Frequently Asked Questions</h1>
                    <p className='font-medium mt-5'>Have Any Question?</p>
                    
                    <div className='lg:min-h-[50vh] lg:w-[700px] mt-12'>
                       <div className='space-y-5'>
                            <div className='bg-[white] rounded overflow-hidden'>
                                <div className='h-[70px] items-center border-b gap-3 p-2 border-[gray] font-medium flex' onClick={Withdraw}>
                                     <div>
                                         <FaPlus className='text-[black]' style={{display:icon, transition:"2s"}}/>
                                         <FaMinus className='text-[black] hidden' style={{display:iconn, transition:"2s"}}/>
                                     </div>

                                    <button className='text-[#FF0000] text-[18px]'> How to Withdraw Money?</button>
                                </div>

                                <p className='h-[0] m-0 bg-[white] mx-4 text-ellipsis font-medium text-[black] text-[14px] ' style={{height:withdraw,transition:"1s"}}>
                                    To withdraw money from your account, you can follow these steps: 1. Log in to your account. 2. Go to the
                                    withdrawal section. 3. Select the amount you want to withdraw (yes there’s limitations on each plan). 4. 
                                    Choose your preferred withdrawal method. 5. Confirm the withdrawal request. 6. Wait for the processing 
                                    and approval of your withdrawal request. 7. Once approved, the money will be transferred to your chosen 
                                    withdrawal met                                
                                </p>
                            </div> 


                            <div className='bg-[white] rounded overflow-hidden'>
                                <div className='h-[70px] items-center border-b gap-3 p-2 border-[gray] font-medium flex' onClick={Deposit}>
                                     <div>
                                         <FaPlus className='text-[black]' style={{display:iconD, transition:"2s"}}/>
                                         <FaMinus className='text-[black] hidden' style={{display:iconnD, transition:"2s"}}/>
                                     </div>

                                    <button className='text-[#FF0000] text-[18px]'> Is there an option For manuel Deposit?</button>
                                </div>

                                <p className='h-[0] m-0 bg-[white] mx-4 text-ellipsis font-medium text-[black] text-[14px] ' style={{height:deposit,transition:"1s"}}>
                                    Yes, there is an option for manual deposit. This means you can choose to deposit money into your account 
                                    manually instead of using automated methods.               
                                </p>
                            </div> 
                        </div>
                    </div>
             </div>

    </div>
  )
}

export default FAQsComponents