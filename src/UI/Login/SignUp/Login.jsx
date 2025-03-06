import React, { useState } from 'react'
import CustomBtn from '../../../ButtonFolder/CustomBtn'
import loginPics from '../login pics/login_image.jpg'
import { Link } from 'react-router-dom'


function Login() {
    const [password , setPassword] = useState('')
    const [email ,setEmail] = useState('')
    function handleLogin() {
      if (!email && !password) {
        alert("Please enter your email and password.");
        return;
      }
  
      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }
  
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }
  
      alert("Login successful!"); // Simulating a successful login
    }
  return (
   
    <div>
        <div className='min-h-[100vh] w-full bg-mybg '>
            <div className='md:hidden'>
                   <div className='h-[20vh] b'>
                   <h1 className='text-mediumScreen font-medium'>TrustFundx</h1>
                   <span  className='flex text-screenSize font-medium gap-1 text-white'>
                      Don't have an account? 
                      <CustomBtn
                       className='h-[30px] w-[100px] bg-primaryColor text-white font-light text-[1em] rounded-md'
                       label = {<Link to='/register'>Register</Link>}
                       
                       
                       />
                   </span>
                  
                   </div>


                   <div className='h-[50vh]  mt-5'>
                    <h2 className='text-heading font-semibold text-center text-primaryColor'>Login your account</h2>
                    <form action="" onSubmit={e=>e.preventDefault()} className='mt-2 leading-9 text-white'>
                        <label htmlFor="email">Email</label>
                        <input type="text" className='w-full bg-white text-black rounded-md h-[2.8em]' onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" maxLength={8} className='w-full text-black bg-white rounded-md h-[2.8em]'onChange={(e)=>setPassword(e.target.value)} />


                        <CustomBtn
                        label='Sign up'
                        onClick ={handleLogin}
                        className='h-[40px] w-full bg-primaryColor mt-9'
                        
                        />

                    </form>

                   </div>

            </div>


            <div className='hidden md:flex gap-3  p-4'>
              <div className='w-[40vw]'>
                <div className='h-[20vh] b'>
                   <h1 className='text-mediumScreen font-medium text-white'>TrustFundx</h1>
                   <span  className='flex text-screenSize font-medium gap-1 text-white'>
                      Don't have an account? <CustomBtn
                       className='h-[30px] w-[100px] bg-primaryColor text-white font-light text-[1em] rounded-md'
                       label={<Link to='/register'>Register</Link>}
                       />
                  

                   </span>    
                </div>

                <div className='h-[70vh]  mt-5 p-7'>
                    <h2 className='text-heading font-semibold text-center text-primaryColor'>Login your account</h2>
                    <form action="" onSubmit={e=>e.preventDefault()} className='mt-2 leading-9 text-white'>
                        <label htmlFor="email">Email</label>
                        <input type="text" className='w-full bg-white text-black rounded-md h-[2.8em]' onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" maxLength={8} className='w-full bg-white text-black rounded-md h-[2.8em]'onChange={(e)=>setPassword(e.target.value)} />


                        <CustomBtn
                        label='sigun up'
                        onClick ={handleLogin}
                        className='h-[40px] w-full bg-red-700 mt-9'
                        
                        />

                    </form>

                   </div>

              </div>
              <div className='w-[60vw] flex justify-center items-center bg-white  p-7'>
                <img src={loginPics} alt="" />

              </div>

            </div>
            

        </div>
    </div>
  )
}

export default Login