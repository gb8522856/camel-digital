import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyUs from '../components/home/WhyUs';

export default function Home() {
  return (
    <div className="bg-light">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyUs />
    </div>
  );
}
