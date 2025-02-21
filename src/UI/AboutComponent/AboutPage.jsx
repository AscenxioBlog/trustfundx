import React from 'react'
import AboutFirstComponent from './AboutFirstComponent'
import AboutSecondComponent from './AboutSecondComponent'
import FAQsComponents from './FAQsComponents'
import NewsLettercomponent from './NewsLettercomponent'
import YoutubeVideo from './YoutubeVideo'


function AboutPage() {
  return (
    <div className=' bg-[#000000] lg:px-34'>

        <AboutFirstComponent />

        <AboutSecondComponent />   

        <FAQsComponents />

       <YoutubeVideo />

       <NewsLettercomponent />
    </div>
  )
}

export default AboutPage
