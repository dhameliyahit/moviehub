import React from 'react'
import Layout from '../layout/layout'
import kalki from '../assets/kalki.jpg'

const Home = () => {
  return (
    <Layout>
      <div className="p-4 flex flex-wrap justify-center">
        <div className="card bg-gray-800 m-4 text-white p-4 rounded-lg shadow-lg w-64 h-96 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <div className="img mb-4">
            <img
              src={kalki}
              alt={kalki}
              className="w-full h-80 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-100"
            />
          </div>
          <div className="info">
            <p className="text-lg font-bold mb-2">{'kalki'}</p>
            <p className="text-sm">{'movieDetails'}</p>
          </div>
        </div>
      
      
      </div>
    </Layout>
  )
}

export default Home
