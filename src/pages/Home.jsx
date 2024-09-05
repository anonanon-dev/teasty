import Header from '../components/header/Header';
import MenuSection from './MenuSection';
import MySwiperSlide from '../components/MySwiperSlider';
import ServingSection from '../components/ServingSectionFolder/ServingSection';
import OrderSection from '../components/ordersection/OrderSection';

function Home() {
  return (
    <div>
      <MySwiperSlide />
      <Header />
      <MenuSection />
      <ServingSection />
      <OrderSection />
    </div>
  );
}

export default Home;
