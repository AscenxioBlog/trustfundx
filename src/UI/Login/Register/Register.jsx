import React, { useState } from 'react';
import CustomBtn from '../../../ButtonFolder/CustomBtn';
import { Link } from 'react-router-dom';
import loginPics from '../login pics/login_image.jpg'


function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });

    // Handles input changes for all fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRegister = () => {
        const { password, confirmPassword, agree } = formData;

        if (!password) return alert('Please enter a password');
        if (password.length < 8) return alert('Password is too short');
        if (password !== confirmPassword) return alert('Passwords do not match');
        if (!agree) return alert('You must agree to the privacy policy');

        alert('Success');

        // ✅ Reset form
        setFormData({
            firstName: '',
            lastName: '',
            username: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false,
        });
    };

    return (
       <div>
            <div className="min-h-screen md:hidden w-full bg-mybg p-4">
                {/* Header */}
                <div className="h-[13vh]   px-4">
                    <h2 className="text-mediumScreen font-medium text-white">TrustFundx</h2>
                    <span className="flex text-screenSize font-medium gap-1 text-white">
                        Already registered?
                        <CustomBtn className="h-[30px] w-[100px] bg-primaryColor text-white font-light text-[1em] rounded-md"
                            label={<Link to="/login">Login</Link>}
                        />
                    </span>
                </div>

                {/* Form Section */}
                <div className="min-h-[70vh] b mt-2.5 p-4">
                    <h2 className="text-center">Create an account</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="leading-8">
                        {['firstName', 'lastName', 'username', 'phone', 'email'].map((field) => (
                            <div key={field}>
                                <label htmlFor={field} className='text-white text-screenSize font-medium'>{field.replace(/([A-Z])/g, ' $1').replace(/^./,(str)=>str.toUpperCase())}</label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                                />
                            </div>
                        ))}

                        <label htmlFor="password" className='text-white text-screenSize font-medium'>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                        />

                        <label htmlFor="confirmPassword" className='text-white text-screenSize font-medium'>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                        />

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                            />
                            <span className='text-white text-screenSize font-medium'>I Agree To The Privacy Policy</span>
                        </div>

                        <CustomBtn className="h-[40px] w-full bg-primaryColor mt-3 text-white"
                            label="Register"
                            onClick={handleRegister}
                        />
                    </form>
                </div>
            </div>


            {/* for medium and big screen  */}

            <div className='min-h-screen w-full hidden md:flex gap-2 p-4 bg-mybg'>
                <div className='md:w-[60vw] lg:w-[40vw]'>
                         {/* Header */}
                    <div className="h-[13vh]  flex justify-between items-center px-4">
                        <h2 className="text-mediumScreen font-medium text-white">TrustFundx</h2>
                        <span className="flex text-screenSize font-medium gap-1 text-white">
                            Already registered?
                            <CustomBtn className="h-[30px] w-[100px] bg-primaryColor text-white font-light text-[1em] rounded-md"
                                label={<Link to="/login">Login</Link>}
                            />
                        </span>
                    </div>
                          {/* Form Section */}
                          <div className="min-h-[70vh]  mt-2.5 p-4">
                                <h2 className="text-center text-primaryColor text-heading font-bold">Create an account</h2>
                                <form onSubmit={(e) => e.preventDefault()} className="leading-8">
                                    
                                    {/* First Name, Last Name, Username, Phone in Flex */}
                                    <div className="flex flex-wrap gap-4">
                                        {['firstName', 'lastName', 'username', 'phone'].map((field) => (
                                            <div key={field} className="flex-1 min-w-[250px]">
                                                <label htmlFor={field} className='text-screenSize font-medium text-white'>{field.replace(/([A-Z])/g, ' $1').replace(/^./,(str)=>str.toUpperCase())}</label>
                                                <input
                                                    type="text"
                                                    name={field}
                                                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                                                    value={formData[field]}
                                                    onChange={handleChange}
                                                    className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Email (Full Width) */}
                                    <div className="w-full">
                                        <label htmlFor="email" className='text-screenSize font-medium text-white'>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                                        />
                                    </div>

                                    {/* Password and Confirm Password */}
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="password" className='text-white text-screenSize font-medium'>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label htmlFor="confirmPassword" className='text-white text-screenSize font-medium'>Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="w-full bg-white text-black rounded-md h-[2.8em] mt-2 mb-2"
                                            />
                                        </div>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                        />
                                        <span className='text-white text-screenSize font-medium'>I Agree To The Privacy Policy</span>
                                    </div>

                                    {/* Submit Button */}
                                    <CustomBtn 
                                        className="h-[40px] w-full bg-primaryColor mt-3 text-white"
                                        label="Register"
                                        onClick={handleRegister}
                                    />
                                </form>
                            </div>



                </div>
                <div className='w-[40vw] lg:w-[60vw] bg-white flex items-center   justify-center p-7'>
                    <img src={loginPics} alt="" />
                    

                </div>

            </div>
       </div>
    );
}

export default Register;
