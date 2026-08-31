import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-primary-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold">
            🎓 Career<span className="text-yellow-300">Guidance</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/90 hover:text-white font-medium">Nyumbani</Link>
            <Link to="/questionnaire" className="text-white/90 hover:text-white font-medium">Mwongozo</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header