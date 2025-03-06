import React from 'react'
import InvestmentPlanFirst from './InvestmentPlanFirst'
import InvestmentPlanSecond from './InvestmentPlanSecond'
import FAQsComponents from '../AboutComponent/FAQsComponents'
import TradingViewWidget from '../HomeComponent/TradingViewWidget'

function InvestmentPlan() {
  return (
    <div  className=' bg-[#000000] lg:px-20 min-h-screen'>

           <InvestmentPlanFirst />     

           <InvestmentPlanSecond />  

           <FAQsComponents />

           <TradingViewWidget />

    </div>
  )
}

export default InvestmentPlan