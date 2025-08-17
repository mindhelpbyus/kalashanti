import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navigation(){
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10" alt="logo" />
          <span className="font-semibold text-gray-900">Mind Game Therapy</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/about" className={({isActive}) => isActive ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>About</NavLink>
          <NavLink to="/doctors" className={({isActive}) => isActive ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>Find Doctors</NavLink>
          <NavLink to="/login" className="px-3 py-1.5 rounded-xl bg-gray-900 text-white hover:opacity-90">Login</NavLink>
          <NavLink to="/signup" className="px-3 py-1.5 rounded-xl bg-brandPurple/90 text-white hover:opacity-90">Sign Up</NavLink>
        </nav>
      </div>
    </header>
  )
}
