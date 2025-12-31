
import { Routes , Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import LogIn from './pages/Login'
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
  )
}

export default App
