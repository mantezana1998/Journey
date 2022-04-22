import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage/HomePage';
import Measurements from '../src/pages/Measurements/Measurements';
import Layout from '../src/pages/Layout/Layout';
import AboutUs from '../src/pages/AboutUs/AboutUs';
import ContactUs from '../src/pages/ContactUs/ContactUs';
import SignUp from '../src/pages/SignUp/SignUp';
import Login from '../src/pages/Login/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path="contactus" element={<ContactUs />}/>
        <Route path="measurements" element={<Measurements />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="login" element={<Login />}/>
      </Route>
    </Routes>
  );
}
