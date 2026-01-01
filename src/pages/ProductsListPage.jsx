import React from 'react'
import ProductsListComponent from '../components/ProductsListComponent'
import Header from '../components/Header'
import FooterArabic from '../components/FooterArabic'

export default function ProductsListPage() {
  return (
    <div>
      <Header/>
      <ProductsListComponent/>
      <FooterArabic/>
    </div>
  )
}
