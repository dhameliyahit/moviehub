import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="about">
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <ul className="space-y-2">
          <li><i className="fas fa-info-circle mr-2"></i>01</li>
          <li><i className="fas fa-info-circle mr-2"></i>01</li>
          <li><i className="fas fa-info-circle mr-2"></i>01</li>
          <li><i className="fas fa-info-circle mr-2"></i>01</li>
          <li><i className="fas fa-info-circle mr-2"></i>01</li>
        </ul>
      </div>
      <div className="contact">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li><i className="fas fa-envelope mr-2"></i>moviehub@gmail.com</li>
          <li><i className="fas fa-phone mr-2"></i>009992220-</li>
        </ul>
      </div>
      <div className="developer-details">
        <h2 className="text-xl font-bold mb-4">Developer</h2>
        <ul className="space-y-2">
          <li><i className="fas fa-user mr-2"></i>Dhameliyahit</li>
          <li># <Link to="/admin/login" className='hover:text-gray-300 hover:underline transition duration-300'>Login</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Movie Hub. All rights reserved.</p>
    </div>
  </footer>

  )
}

export default Footer