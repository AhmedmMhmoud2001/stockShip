import React from 'react'
import Header from '../components/Header'
import FooterArabic from '../components/FooterArabic'
import ProductsList from "../components/ProductsList";
import ProductDetailsComponent from '../components/ProductDetailsComponent';
export default function ProductDetails() {
    const title = "بضائع ذات صلة";
  return (
    <div>
       <Header/>
      <ProductDetailsComponent/>
       <ProductsList title={title}/>
       <FooterArabic/>
    </div>
  )
}
