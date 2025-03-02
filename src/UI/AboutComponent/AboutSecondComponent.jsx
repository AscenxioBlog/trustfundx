import React from 'react';
import CustomBtn from '../../ButtonFolder/CustomBtn';

function AboutSecondComponent() {
  return (
    
    <div className='flex items-center lg:min-h-screen min-h-[70vh] px-4 py-10 '>
      <div className='grid gap-7 grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mx-auto'>
        <div>
              <img src="/Dashboard.png" className="w-full h-auto rounded-lg"/>
        </div>

        <div className='text-white flex flex-col justify-center font-medium'>
          <h1 className='text-4xl text-red-600 lg:text-5xl lg:leading-tight'>
            Become part of our <br /> community
          </h1>

          <p className='mt-6 text-white leading-relaxed'>
            Algocapital offers a global opportunity for individuals to earn a percentage of their investment. 
            Our team consists of experienced traders and analysts who have demonstrated professionalism over 
            many years. We provide a risk-free trading system in both traditional financial and cryptocurrency markets.
          </p>

          <CustomBtn 
            height='40px'
            width='150px'
            label='Learn More'
            backgroundColor='#FF0000'
            borderRadius='5px'
            marginTop='30px'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSecondComponent;
