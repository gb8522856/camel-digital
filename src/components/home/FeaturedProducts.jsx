import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">热门产品</h2>
            <p className="text-gray-500">精选高品质数码配件</p>
          </div>
          <Link
            to="/products"
            className="hidden sm:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
          >
            查看全部 <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link
          to="/products"
          className="sm:hidden flex items-center justify-center gap-1 text-primary font-medium mt-6 hover:gap-2 transition-all"
        >
          查看全部 <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
