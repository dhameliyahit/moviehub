import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FOF from './pages/FOF'
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
    <Toaster />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/admin/login' element={<Login/>}></Route>
          <Route path='/*' element={<FOF/>}></Route>
      </Routes>    
    </>
  )
}