import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Layout from './../../layout/layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const UserAdmin = () => {
  const params = useParams();
  const [loading,setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieName,setMovieName] = useState("");
  const [movieDesc,setMovieDesc] = useState("");
  const [imdb,setImdb] = useState("");
  const [l480,setL480] = useState("");
  const [l720,setL720] = useState("");
  const [img,setImg] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const AddMovie = async(event) =>{
    setLoading(true)
    console.log(movieName,movieDesc,imdb,l480,l720,img);
    event.preventDefault();
    const formData = new FormData();
    formData.append('MovieName', movieName);
    formData.append('MovieDesc', movieDesc);
    formData.append('imdb', imdb);
    formData.append('link480p', l480);
    formData.append('link720p', l720);
    formData.append('MoviePoster', img);
    
    try {
      const res = await axios.post("http://localhost:8080/api/v1/movie/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Uploaded !");
      console.log(res.data.movie);
    } catch (error) {
      toast.error("Not Uploaded !");
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <Layout>
      <div className='p-5'>
        <h1 className='text-3xl my-3'>Hello , {params.name}</h1>
        <div className="">
          <button onClick={showModal} className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Add Movie</button>
        </div>
      </div>

      <Modal title="Add Movie" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="movie-name">Movie Name</label>
            <input onChange={(e)=>setMovieName(e.target.value)} type="text" id="movie-name" placeholder="Enter Movie Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="movie-description">Movie Description</label>
            <input onChange={(e)=>setMovieDesc(e.target.value)} type="text" id="movie-description" placeholder="Enter Movie Description" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="imdb-rating">IMDB Rating</label>
            <input onChange={(e)=>setImdb(e.target.value)} type="text" id="imdb-rating" placeholder="Enter IMDB Rating" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="link-480p">480p Link</label>
            <input onChange={(e)=>setL480(e.target.value)} type="text" id="link-480p" placeholder="Enter 480p Link" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="link-720p">720p Link</label>
            <input onChange={(e)=>setL720(e.target.value)} type="text" id="link-720p" placeholder="Enter 720p Link" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="movie-poster">Movie Poster</label>
            <input onChange={(e)=>setImg(e.target.files[0])} type="file" id="movie-poster" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={AddMovie}>{loading ? "Submiting..." : "Submit"}</button>
          </div>
        </form>
      </Modal>
    </Layout>
  )
}

export default UserAdmin