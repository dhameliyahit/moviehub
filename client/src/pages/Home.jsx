import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res_movie = await axios.get("http://localhost:8080/api/v1/movie/all");
      console.log(res_movie.data.movie);
      const movie_record = res_movie.data.movie;
      setMovies(movie_record);
      toast.success("Movies fetched successfully");
    } catch (error) {
      toast.error("Failed to fetch movies");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <div className="p-4 flex flex-wrap justify-center">
        <h1 className='text-3xl font-bold w-full text-center mb-4'>Movies</h1>
        {movies.map(m => (
          <div key={m._id} className="card bg-gray-800 m-4 text-white p-4 rounded-lg shadow-lg w-64 h-96 overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <h1>{m._id}</h1>
            <div className="img mb-4">
              <img
                src={`http://localhost:8080/api/v1/movie/poster/${m._id}`}
                alt={m.MovieName}
                className="w-full h-80 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-100"
              />
            </div>
            <div className="info">
              <p className="text-lg font-bold mb-2">{m.MovieName}</p>
              <p className="text-sm">{m.MovieDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
