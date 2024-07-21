import React from 'react'
import Layout from './../layout/layout';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
          <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold
      my-7'>Login</h1>

      <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id='username'/>

        <input type="text" placeholder='Emaill' className='border p-3 rounded-lg' id='username'/>
        
        <input type="text" placeholder='Password' className='border p-3 rounded-lg' id='username'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>

      <div className="flex gap-2 mt-5">
          <p>Have an Account? </p>
          <Link to={"/sign-in"}>
            <span className='text-blue-700 hover:underline'>Sign In</span>
          </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Login