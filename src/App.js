import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage/HomePage';
import Measurements from '../src/pages/Measurements/Measurements'

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />}/>
        <Route path="/measurements" element={<Measurements />}/>
      </Route>
    </Routes>
  );
}

export default App;
