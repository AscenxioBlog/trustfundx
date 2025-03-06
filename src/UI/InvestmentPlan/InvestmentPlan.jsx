import React from 'react'
import InvestmentPlanFirst from './InvestmentPlanFirst'
import InvestmentPlanSecond from './InvestmentPlanSecond'
import FAQsComponents from '../AboutComponent/FAQsComponents'

function InvestmentPlan() {
  return (
    <div  className=' bg-[#000000] lg:px-20 min-h-screen'>

           <InvestmentPlanFirst />     

           <InvestmentPlanSecond />  

           <FAQsComponents />

    </div>
  )
}

export default InvestmentPlan