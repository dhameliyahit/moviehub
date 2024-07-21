import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FOF from './pages/FOF'

export default function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/admin/login' element={<Login/>}></Route>
      <Route path='/*' element={<FOF/>}></Route>
  </Routes>    
  )
}