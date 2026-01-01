
import { Routes , Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import LogIn from './pages/Login'
import SignUp from "./pages/SignUp";
import TermsPoliciesPage from "./pages/TermsPoliciesPage";
import Notification from "./pages/Notification";
import CompanyProfilePage from "./pages/CompanyProfilePage";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/TermsAndPolicies" element={<TermsPoliciesPage/>}/>
      <Route path="/Notification" element={<Notification/>}/>
      <Route path="/CompanyProfilePage" element={<CompanyProfilePage/>}/>
    </Routes>
  )
}

export default App
