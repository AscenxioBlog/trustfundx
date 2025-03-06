import React from 'react'
import AboutFirstComponent from './AboutFirstComponent'
import AboutSecondComponent from './AboutSecondComponent'
import FAQsComponents from './FAQsComponents'
import NewsLettercomponent from './NewsLettercomponent'
import YoutubeVideo from './YoutubeVideo'
import AboutThirdComponent from './AboutThirdComponent'


function AboutPage() {
  return (
    <div className=' bg-[#000000] lg:px-20 min-h-screen'>

        <AboutFirstComponent />

        <AboutSecondComponent />   

        <FAQsComponents />

       <YoutubeVideo />

       <AboutThirdComponent />

       <NewsLettercomponent />
    </div>
  )
}

export default AboutPage
