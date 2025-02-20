import React from 'react'
// import aboutImage from "../assets/Dashboard.png"
import CustomBtn from '../../ButtonFolder/CustomBtn'

function AboutSecondComponent() {
  return (
    <div>

             <div className='h-[90vh] flex items-center bg-[#000000]'>

                     <div className='h-[60vh] gap-7 grid grid-cols-1 lg:grid-cols-2'>   

                            <div className='Dashboard-photo'>
                                 {/* <img src={aboutImage}/> */}
                            </div>

                            <div className='text-[#FFFF] flex flex-col justify-center font-medium'>
                                <h1 className='text-5xl leading-14'>Become part of our <br />
                                 community</h1>

                               <div className='mt-10 text-WHITE'>
                                    <p>
                                            Algocapital offers a global opportunity for individuals 
                                            to earn a percentage of their investment. Our team 
                                            consists of experienced traders and analysts who have 
                                            demonstrated professionalism over many years. We 
                                            provide a risk-free trading system in both traditional 
                                            financial and cryptocurrency markets.
                                        </p>
                               </div>
                                 
                                
                                <CustomBtn 
                                    height="40px"
                                    width="150px"
                                    label="Learn More"
                                    backgroundColor="#FF0000"
                                    borderRadius="5px"
                                    marginTop="30px"
                                />
                            </div>
                     </div>

             </div>

    </div>
  )
}

export default AboutSecondComponent