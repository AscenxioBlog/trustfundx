import React from 'react'
import ContactComponent1 from './ContactComponent1'
import ContactComponent2 from './ContactComponent2'
import ContactComponent3 from './ContactComponent3'
import ContactComponent4 from './ContactComponent4'

function ContactPage() {
  return (
    <div className='min-h-[100vh] bg-mybg '>
      <ContactComponent1/>
      <ContactComponent2/>
      <ContactComponent3/>
      <ContactComponent4/>
    </div>
  )
}

export default ContactPage
