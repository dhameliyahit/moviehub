import React, { useState } from 'react'
import Layout from './../layout/layout';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [loading,setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const Auth = async(event) =>{
  event.preventDefault();
  if(userName===""||email===""||Password===""){
    toast.error("All The fields are required");
  }else{
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/v1/admin/all/admins");
      console.log(res.data.user);
      
      let found = false;
      let infoError = false;

      res.data.user.map((p) => {
        if (userName == p.userName && email == p.email && Password == p.Password) {
          toast.success("Done!");
          found = true;
        } else if ((userName == p.userName || email == p.email || Password == p.Password) && !found && !infoError) {
          toast.error("Enter right Info!");
          infoError = true;
        } else if (!found && !infoError) {
          toast.error("You Are Not Admin!");
          infoError = true;
        }
      });
      setLoading(false)
    }
}

return (
  <Layout>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold
            my-7'>Login</h1>

      <form className='flex flex-col gap-3'>
        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='Username' className='border p-3 rounded-lg' id='username' />

        <input type="text" onChange={(e) => setemail(e.target.value)} placeholder='Emaill' className='border p-3 rounded-lg' id='username' />

        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='border p-3 rounded-lg' id='username' />

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' onClick={Auth}>{loading ? "Authentication..." : "Login"}</button>
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