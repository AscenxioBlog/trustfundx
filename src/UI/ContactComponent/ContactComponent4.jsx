import React, { useState } from 'react'
import CustomBtn from '../../ButtonFolder/CustomBtn'
import budget from '../HomeComponent/HomePictures/budget.png'

function ContactComponent4() {
     const [plans, setPlans] = useState('');
     const [amount, setAmount] = useState('');


    const planDetails = {
        "compound plan": { minAmount: 2000, interest: 0.30 },
        "golden plan": { minAmount: 5000, interest: 0.50 },
        "shareholder plan": { minAmount: 6000, interest: 0.70 },
        "alpha plan": { minAmount: 8000, interest: 1.19 },
    };


    //refactored code 
    const handleEstimate = (plans, amount) => {
        console.log('Plans:', plans);  // Log selected plan
        console.log('Amount:', amount); // Log the amount

        if (!amount) return alert('Please insert an amount'); // Alert if no amount is entered

        // Convert the input amount to a number
        const numericAmount = Number(amount);

        // Check if the plan exists in planDetails object
        const plan = plans.toLowerCase();

        if (planDetails[plan]) {
            const { minAmount, interest } = planDetails[plan];
            // console.log(minAmount,interest, 'ma' , 'i')

            // Check if the amount is greater than the minimum required for the selected plan
            if (numericAmount >= minAmount) {
                const total = (numericAmount * interest) / 100;
                alert(`Deposited ${(total + numericAmount).toFixed(2)}`)
                // console.log('Calculated total:', (total +numericAmount).toFixed(2));
            } else {
                alert(`Amount must be greater than ${minAmount} for the ${plans}`);
            }
        } else {
            alert('Invalid plan selected');
        }
    };


  return (
    <div>
             {/* for small screen  */}

        <div className='min-h-[200px] w-full flex flex-col  justify-center md:hidden  mt-2 bg-blue-400 p-4'>
            <form action="" className='flex  flex-col gap-2 ' onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor=" amount" className='text-heading'>Input an amount</label>
                <input type="number" id='amount' className='border-2 border-white h-[40px] mt-2 '
                 placeholder='Enter amount' 
                 value={amount}
                 onChange={(e)=> setAmount(Number(e.target.value))}
                 />
                <label htmlFor="plans" className='mt-2 text-heading'>Choose One Of Our Available Plans</label>
                    <select name="" id="plans" className='max-w-full h-[40px] mt-2 border-white border-2'
                    value={plans}
                     onChange={(e)=>setPlans(e.target.value)}
                     >
                        <option >Select a plan</option>
                        <option value='Compound Plan'>Compound Plan</option>
                        <option value= 'Golden Plan'> Golden Plan </option>
                        <option value='ShareHolder Plan'> ShareHolder Plan </option>
                        <option value = 'Alpha Plan'> Alpha Plan </option>
                        <option value='Standard Plan'> Standard Plan </option>
                        <option value='Mega Plan'> Mega Plan </option>
                    </select>
                <CustomBtn
                    label = 'calculate estimated earning'
                    height ='40px'
                    // width = '200px'
                    className = 'bg-primaryColor w-full  rounded-b-md'
                    onClick= {()=>handleEstimate(plans,amount)}
                
                />
            </form>
        </div>



        {/* for Meduim Screen  */}

        <div className='min-h-[200px] w-full hidden  justify-center bg-amber-300 md:flex flex-wrap mt-2 lg:hidden'>
            <form action="" className='grid  grid-cols-2 items-center gap-1' onSubmit={(e)=>e.preventDefault()}>
                <div className='flex flex-col '>

                    <label htmlFor=" amount" className='text-heading'>Input an amount</label>
                    <input type="number" id='amount' className='border-2 border-white h-[40px] mt-2 '
                    placeholder='Enter amount' 
                    value={amount}
                    onChange={(e)=> setAmount(Number(e.target.value))}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="plans" className=' text-heading'>Choose One Of Our Available Plans</label>
                        <select name="" id="plans" className='max-w-full h-[40px] mt-2 border-white border-2'
                        value={plans}
                        onChange={(e)=>setPlans(e.target.value)}
                        >
                            <option >Select a plan</option>
                            <option value='Compound Plan'>Compound Plan</option>
                            <option value= 'Golden Plan'> Golden Plan </option>
                            <option value='ShareHolder Plan'> ShareHolder Plan </option>
                            <option value = 'Alpha Plan'> Alpha Plan </option>
                            <option value='Standard Plan'> Standard Plan </option>
                            <option value='Mega Plan'> Mega Plan </option>
                        </select>
                </div>   
                <div className='col-span-2'>
                    <CustomBtn
                        label = 'calculate estimated earning'
                        height ='40px'
                        // width = '200px'
                        className = 'bg-primaryColor w-full col-span-2'
                        onClick= {()=>handleEstimate(plans,amount)}
                    
                    />
                </div>
              
            </form>
        </div>


        {/* for Big screen  */}
        <div className='min-h-[170px] w-full bg-blue-400 hidden lg:grid grid-cols-[200px_minmax(900px,1fr)]'>
            <div className='bg-primaryColor flex items-center justify-center'>
                <img src={budget} alt="budget pics" />
            </div>
            <div className=' grid items-center'>
                <form action="" className=' flex justify-center gap-5 items-center ' onSubmit={(e)=>e.preventDefault()}>
                    <div className='flex flex-col '>

                        <label htmlFor=" amount" className='text-mediumScreen font-semibold'>Input an amount</label>
                        <input type="number" id='amount' className='border-2 border-white text-white h-[40px] mt-2  w-[300px]'
                        placeholder='Enter amount' 
                        value={amount}
                        onChange={(e)=> setAmount(Number(e.target.value))}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="plans" className=' text-mediumScreen font-medium'>Choose One Of Our Available Plans</label>
                            <select name="" id="plans" className='max-w-full h-[40px] mt-2 border-white border-2'
                            value={plans}
                            onChange={(e)=>setPlans(e.target.value)}
                            >
                                <option >Select a plan</option>
                                <option value='Compound Plan'>Compound Plan</option>
                                <option value= 'Golden Plan'> Golden Plan </option>
                                <option value='ShareHolder Plan'> ShareHolder Plan </option>
                                <option value = 'Alpha Plan'> Alpha Plan </option>
                                <option value='Standard Plan'> Standard Plan </option>
                                <option value='Mega Plan'> Mega Plan </option>
                            </select>
                    </div>   
                        <CustomBtn
                            label = 'calculate estimated earning'
                            height ='40px'
                            width = '200px'
                            className = 'bg-primaryColor w-full col-span-2 mt-[40px] rounded-s-sm'
                            onClick= {()=>handleEstimate(plans,amount)}
                        
                        />
                
                </form>
            </div>

        </div>
    </div>
  )
}

export default ContactComponent4