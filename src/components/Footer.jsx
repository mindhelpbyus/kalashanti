import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2025 Mind Game Therapy</p>
        <div className="flex gap-6 text-sm">
          <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
        </div>
      </div>
    </footer>
  )
}
