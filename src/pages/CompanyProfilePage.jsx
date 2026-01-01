import React from 'react'
import Header from '../components/Header'
import FooterArabic from '../components/FooterArabic'
import ProductsList from '../components/ProductsList'
import RecommendedProducts from '../components/RecommendedProducts'
import CompanyAdsComponent from '../components/CompanyAdsComponent'
export default function CompanyProfilePage() {
    const title = "الاكثر شراءا"
  return (
    <div>
      <Header/>
      <CompanyAdsComponent/>
      <RecommendedProducts/>
      <ProductsList title={title}/>
      <FooterArabic/>
    </div>
  )
}
