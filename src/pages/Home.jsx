
import Banner from '../components/Banner'
import Header from '../components/Header'
import FeaturedCategories from '../components/FeaturedCategories'
import ProductsList from '../components/ProductsList'
import RecommendedProducts from '../components/RecommendedProducts'
import NewArrivalsBannerWithSwiper from '../components/NewArrivalsBannerWithSwiper'
import CtaBanner from '../components/CtaBanner'
import PopularGoodsChips from '../components/PopularGoodsChips'
import FooterArabic from '../components/FooterArabic'
export default function Home() {
  const title = ["الهواتف الذكيه","الملابس"];
  return (
    <div>
      <Header/>
      <Banner/>
      <FeaturedCategories/>
      <ProductsList title={title[0]}/>
      <ProductsList title={title[1]}/>
       <NewArrivalsBannerWithSwiper/>
      <RecommendedProducts/>
      <CtaBanner/>
      <PopularGoodsChips/>
      <FooterArabic/>
     
    </div>
  )
}
