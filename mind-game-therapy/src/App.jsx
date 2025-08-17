import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DoctorsList from './pages/DoctorsList'
import DoctorProfile from './pages/DoctorProfile'
import PatientDashboard from './pages/PatientDashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import Appointment from './pages/Appointment'
import Payment from './pages/Payment'
import About from './pages/About'
import Terms from './pages/Terms'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation/>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/doctors" element={<DoctorsList/>}/>
          <Route path="/doctors/:id" element={<DoctorProfile/>}/>
          <Route path="/patient" element={<PatientDashboard/>}/>
          <Route path="/doctor" element={<DoctorDashboard/>}/>
          <Route path="/appointment/:id" element={<Appointment/>}/>
          <Route path="/payment/:id" element={<Payment/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
