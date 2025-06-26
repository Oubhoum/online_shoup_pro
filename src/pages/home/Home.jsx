import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { products } from "../../data/products";



const Home = () => {

  const laptops = products.filter((item) => item.isLaptop === true);
  const phones = products.filter((item) => item.isLaptop === false);


  return (
    <>

      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من الابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجديد من الهواتف" />
      <Slider data={phones} />
      <HeadingTitle title="تسوق حسب المارك" />
      <Brands />
    </>


  )
}

export default Home