import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Measurements from '../Measurements/Measurements';
import Layout from '../Layout/Layout';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import userService from '../../utils/userService';
import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import Behaviors from '../Behaviors/Behaviors'

export default function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path="contactus" element={<ContactUs />}/>
        <Route path="measurements" element={<Measurements />}/>
        <Route path="signup" element={<SignUp handleSignUpOrLogin={handleSignUpOrLogin} />}/>
        <Route path="login" element={<Login handleSignUpOrLogin={handleSignUpOrLogin} />}/>
        <Route path='dashboard' element={<DashboardLayout user={user} />}>
          <Route index element={<Dashboard />}/>
          <Route path='behaviors' element={<Behaviors />}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}
