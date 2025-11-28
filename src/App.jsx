import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Unitoverview from './Components/Unitoverview.jsx'
import Tenantsoverview from './Components/tenantoverview.jsx'
import Paymenthistory from './Components/paymenthistory.jsx'
import Tenantprofile from './Components/tenantprofile.jsx'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Unitoverview/>} />
        <Route path="/tenantoverview" element={<Tenantsoverview/>} />
        <Route path="/paymenthistory" element={<Paymenthistory/>} />
        <Route path="//tenantprof" element={<Tenantprofile/>} />
      </Routes>
    </Router>
  )
}

export default App
