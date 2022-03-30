import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage/HomePage';
import Measurements from '../src/pages/Measurements/Measurements';
import Layout from '../src/pages/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="/measurements" element={<Measurements />}/>
      </Route>
    </Routes>
  );
}
