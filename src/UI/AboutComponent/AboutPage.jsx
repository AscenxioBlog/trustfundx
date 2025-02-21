import React from 'react'
import AboutFirstComponent from './AboutFirstComponent'
import AboutSecondComponent from './AboutSecondComponent'
import FAQsComponents from './FAQsComponents'

function AboutPage() {
  return (
    <div className=' bg-[#000000] lg:px-34'>

        <AboutFirstComponent />

        <AboutSecondComponent />   

        <FAQsComponents />
    </div>
  )
}

export default AboutPage
