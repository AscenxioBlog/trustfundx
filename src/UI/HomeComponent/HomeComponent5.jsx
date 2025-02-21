import React, { useState } from 'react'
import CustomBtn from '../../ButtonFolder/CustomBtn'

function HomeComponent5() {
    const [plans, setPlans] = useState('');
    const [amount, setAmount] = useState('');

   

    // const handleEstimate = (plans, amount) => {
    //     console.log('Plans:', plans);  // Log selected plan
    //     console.log('Amount:', amount); // Log The A mount
    //     if(!amount) return alert('please insert an amount') //If there is no amount alert 
    //     if (plans.toLowerCase() === 'compound plan' && amount > 2000) //check the value and convert it to lowercase before performing the function
    //          {
    //         const interest = 0.30;
    //         const total = (Number(amount) * interest) / 100;
    //         console.log('Calculated total:', total);
    //     } else if( plans.toLowerCase() === 'golden plan' && amount > 5000 ){
    //         const interest = 0.50;
    //         const total =(Number(amount) * interest)/100;
    //         alert(`${total.toFixed(2)}`)
    //     } else if(plans.toLowerCase() === 'shareholder plan' && amount > 6000){
    //         const interest = 0.70;
    //         const total = (Number(amount) * interest)/100;
    //         alert(`Fixed Investment ${total.toFixed(2)} `)
    //     } else if (plans.toLowerCase() === 'alpha plan' && amount > 8000) {
    //         const interest = 1.19;
    //         const total = (Number(amount)* interest)/100;
    //         alert(`Fixed Investment ${total.toFixed(2)} `)
          
    //     }
    // }



        
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
                alert(`${(total + numericAmount).toFixed(2)}`)
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

        <div className='min-h-[200px] w-full flex flex-col  justify-center bg-amber-300 md:hidden  mt-2'>
            <form action="" className='flex  flex-col' onSubmit={(e)=>e.preventDefault()}>
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
                    className = 'bg-primaryColor w-full mt-3'
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
        <div className='min-h-[170px] w-full bg-red-500 hidden lg:grid grid-col-[20%,80%]'>
            <div>
                hjk
            </div>
            <div>
                jk
            </div>

        </div>


    </div>
  )
}

export default HomeComponent5