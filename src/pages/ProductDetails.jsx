import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import FooterArabic from '../components/FooterArabic'
import ProductsList from "../components/ProductsList";
import ProductDetailsComponent from '../components/ProductDetailsComponent';
export default function ProductDetails() {
  const { t } = useTranslation();
  const title = t("products.relatedProducts");
  return (
    <div>
       <Header/>
      <ProductDetailsComponent/>
       <ProductsList title={title}/>
       <FooterArabic/>
    </div>
  )
}
