import React from 'react'
import HomeComponent1 from './HomeComponent1'
import HomeComponent2 from './HomeComponent2'
import HomeComponent3 from './HomeComponent3'

function HomePage() {
  return (
    <div className=' h-[100vh] w-full bg-mybg'>
      <HomeComponent1/>
      <HomeComponent2/>
      <HomeComponent3/>
      
    </div>
  )
}

export default HomePage
