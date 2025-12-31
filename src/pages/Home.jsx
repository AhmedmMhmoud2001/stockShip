
import Banner from '../components/Banner'
import Header from '../components/Header'
import FeaturedCategories from '../components/FeaturedCategories'
import ProductCard from '../components/ProductCard'
import ProductsList from '../components/ProductsList'
import ProductsListClothes from '../components/ProductsListClothes'
import RecommendedProducts from '../components/RecommendedProducts'
import NewArrivalsBannerWithSwiper from '../components/NewArrivalsBannerWithSwiper'
import CtaBanner from '../components/CtaBanner'
import PopularGoodsChips from '../components/PopularGoodsChips'
import FooterArabic from '../components/FooterArabic'
export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeaturedCategories/>
      <ProductsList/>
      <ProductsListClothes/>
       <NewArrivalsBannerWithSwiper/>
      <RecommendedProducts/>
      <CtaBanner/>
      <PopularGoodsChips/>
      <FooterArabic/>
     
    </div>
  )
}
