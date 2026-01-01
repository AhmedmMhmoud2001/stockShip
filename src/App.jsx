
import { Routes , Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import LogIn from './pages/Login'
import SignUp from "./pages/SignUp";
import TermsPoliciesPage from "./pages/TermsPoliciesPage";
import Notification from "./pages/Notification";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import OrderCheckout from "./pages/OrderCheckout";
import OrdersPage from "./pages/OrdersPage";
import ProductsListPage from "./pages/ProductsListPage";
import OrderCheckoutPageTwo from "./pages/OrderCheckoutPageTwo";
import PaymentPageOne from "./pages/PaymentPageOne";
import PaymentPageTwo from "./pages/PaymentPageTwo";
import OrderTrackingCardPage from "./pages/OrderTrackingCardPage";
import SignupBankInfoFormPage from "./pages/SignupBankInfoFormPage";
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
      <Route path="/OrderCheckout" element={<OrderCheckout/>}/>
      <Route path="/OrdersPage" element={<OrdersPage/>}/>
      <Route path="/ProductsListPage" element={<ProductsListPage/>}/>
      <Route path="/OrderCheckoutPageTwo" element={<OrderCheckoutPageTwo/>}/>
      <Route path="/PaymentPageOne" element={<PaymentPageOne/>}/>
      <Route path="/PaymentPageTwo" element={<PaymentPageTwo/>}/>
      <Route path="/OrderTrackingCardPage" element={<OrderTrackingCardPage/>}/>
      <Route path="/SignupBankInfoFormPage" element={<SignupBankInfoFormPage/>}/>

      



    </Routes>
  )
}

export default App
