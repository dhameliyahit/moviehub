import React,{useState} from 'react'
import MovieHubLogo from '../assets/MovieHubLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={MovieHubLogo} alt="Movie Hub Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">Movie Hub</span>
        </div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-blue-700 p-2 rounded-r-md hover:bg-blue-800 transition duration-300">
            Search
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300  hover:underline transition duration-300">Home</Link>
          <Link to="/explorer" className="hover:text-gray-300 hover:underline transition duration-300">Explorer</Link>
          <Link to="/about" className="hover:text-gray-300 hover:underline transition duration-300">About Us</Link>
          <Link to="/rfm" className="hover:text-gray-300 hover:underline transition duration-300">Request For Movie</Link>
          <Link to="/admin/login" className='hidden sm:block hover:text-gray-300 hover:underline transition duration-300'>Login</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-blue-700 p-2 rounded-r-md hover:bg-blue-800 transition duration-300">
                Search
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
              <Link to="/explorer" className="hover:text-gray-300 transition duration-300">Explorer</Link>
              <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
              <Link to="/rfm" className="hover:text-gray-300 transition duration-300">Request For Movie</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
