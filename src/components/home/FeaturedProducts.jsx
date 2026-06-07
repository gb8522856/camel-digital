import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-10 bg-light">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-dark mb-1">热门产品</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
