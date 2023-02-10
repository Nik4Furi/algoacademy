import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//------Components Modules------X
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//------Pages Modules-------X
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Error from './pages/Error'
import Courses from './pages/Course';
import Dashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/Users/UserDashboard';
import MentorDashboard from './pages/Mentors/MentorDashboard';
import Mentors from './pages/Admin/Mentors';
import UserState from './contexts/Users/UserState';
import Alerts from './components/Alerts';

function App() {

  useEffect(()=>{
    AOS.init();
  })

  const [alert,setAlert] = useState(null);

  const showAlert = (type,msg)=>{
    setAlert({type:type,msg:msg});

    setTimeout(()=>{
    setAlert(null);

    },2000)
  }

  return (
    <>
      <UserState >
        <BrowserRouter>
          {/* Navbar Component  */}
          <Navbar />

          {/* Alert Component  */}
          <div className="container-fluid m-0 p-0" style={{minHeight:"30px", backgroundColor: "rgb(228, 220, 231)"}}>
            <Alerts alert={alert} />
          </div>

          {/* Alert Component, to show our messages for success and errors  */}
          {/* <Alerts alerts={alerts}/> */}

          <Routes>
            {/* Home Page  */}
            <Route exact path="/" element={<Home  />} />

            {/* Courses Page  */}
            <Route exact path="/courses" element={<Courses />} />

            {/* Register Page  */}
            <Route exact path="register" element={<Register showAlert={showAlert} />}  />

            {/* Login Page */}
            <Route exact path="login" element={<Login />} />
            <Route exact path="logout" element={<Logout />} />

            {/* Error Page  */}
            <Route exact path="*" element={<Error />} />

            {/* Admins routes start from here  */}
            <Route exact path="/admin/" element={<Dashboard />} />
            <Route exact path="/admin/mentors" element={<Mentors />} />

            {/* Admin users routes  */}
            <Route exact path="/users/" element={<UserDashboard />} />

            {/* Mentors routes  */}
            <Route exact path="/mentors/" element={<MentorDashboard />} />

          </Routes>

          {/* Footer Component  */}
          <Footer />
        </BrowserRouter>
      </UserState>
    </>
  )
}

export default App
