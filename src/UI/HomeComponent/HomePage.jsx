import React from 'react'
import HomeComponent1 from './HomeComponent1'
import HomeComponent2 from './HomeComponent2'
import HomeComponent3 from './HomeComponent3'
import HomeComponent4 from './HomeComponent4'
import HomeComponent5 from './HomeComponent5'
import HomeComponent6 from './HomeComponent6'
import NewsLettercomponent from '../AboutComponent/NewsLettercomponent'
import YoutubeVideo from '../AboutComponent/YoutubeVideo'
import FAQsComponents from '../AboutComponent/FAQsComponents'
import AboutSecondComponent from '../AboutComponent/AboutSecondComponent'

function HomePage() {
  return (


    <div className=' min-h-[100vh] w-full bg-mybg overflow-x-hidden'>
      <HomeComponent1/>
      <HomeComponent2/>
      <HomeComponent3/>
      <AboutSecondComponent/>
      <HomeComponent4/>
      <HomeComponent5/>
      <HomeComponent6/>
      <FAQsComponents/>
      <NewsLettercomponent/>
      <YoutubeVideo/>
    </div>
  )
}

export default HomePage
