import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Services from './pages/Services';
import Users from './pages/Users';
import Items from './pages/Items';
import Reports from './pages/Reports';


function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/users" element={<Users />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
