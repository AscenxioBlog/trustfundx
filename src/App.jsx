import React from 'react'
import ContextApp from './ContextApp/ContextApp'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import HomePage from './UI/HomeComponent/HomePage'
import AboutPage from './UI/AboutComponent/AboutPage'
import ContactPage from './UI/ContactComponent/ContactPage'
import AdminPage from './UI/AdminDashboard/AdminPage'
import UserDashboard from './UI/UserDashboard/UserDashboard'
import Header from './UI/HeaderFolder/Header'


function App() {
  // const location = useLocation()

  // const hideHeaderFoter = location.pathname === '/user'
  return (
    <div className=''>
      <ContextApp>
        <BrowserRouter>
       {/* {!hideHeaderFoter && <Header />}  */}
       <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/user' element={<UserDashboard/>}/>
          </Routes>
        </BrowserRouter>
      </ContextApp>
    </div>
  )
}

export default App
