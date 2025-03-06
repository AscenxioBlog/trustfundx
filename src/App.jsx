<<<<<<< HEAD
import React from 'react'
import ContextApp from './ContextApp/ContextApp'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import HomePage from './UI/HomeComponent/HomePage'
import AboutPage from './UI/AboutComponent/AboutPage'
import ContactPage from './UI/ContactComponent/ContactPage'
import AdminPage from './UI/AdminDashboard/AdminPage'
import UserDashboard from './UI/UserDashboard/UserDashboard'
import Header from './UI/HeaderFolder/Header'
import InvestmentPlan from './UI/InvestmentPlan/InvestmentPlan'

=======
import React from "react";
import ContextApp from "./ContextApp/ContextApp";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./UI/HomeComponent/HomePage";
import AboutPage from "./UI/AboutComponent/AboutPage";
import ContactPage from "./UI/ContactComponent/ContactPage";
import AdminPage from "./UI/AdminDashboard/AdminPage";
import UserDashboard from "./UI/UserDashboard/UserDashboard";
import Header from "./UI/HeaderFolder/Header";
import Login from "./UI/Login/SignUp/Login";
import Register from "./UI/Login/Register/Register";
>>>>>>> 4301eca4813e43d49368979f4dcd919bb47425d0

function App() {
  return (
<<<<<<< HEAD
    <div className=''>
      <ContextApp>
        <BrowserRouter>
       {/* {!hideHeaderFoter && <Header />}  */}
       <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/investmentplan' element={<InvestmentPlan/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/user' element={<UserDashboard/>}/>
          </Routes>
        </BrowserRouter>
      </ContextApp>
    </div>
  )
=======
    <ContextApp>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ContextApp>
  );
>>>>>>> 4301eca4813e43d49368979f4dcd919bb47425d0
}

function AppContent() {
  const location = useLocation();

  // Hide header when on the login page
  const hideHeader = location.pathname === "/login" ||location.pathname=== "/register";

  return (
    <div>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
