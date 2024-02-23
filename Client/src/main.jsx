import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Counseling from './Pages/Counseling.jsx'
import ViewProfile from './Pages/ViewProfile.jsx'
import Recommendation from './Pages/Recommendation.jsx'
import MyObjective from './Pages/MyObjective.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Counseling" element={<Counseling />} />
      <Route path="/ViewProfile" element={<ViewProfile />} />
      <Route path="/Recommendation" element={<Recommendation />} />
      <Route path="/MyObjective" element={<MyObjective />} />
    </Routes>
  </BrowserRouter>
)
