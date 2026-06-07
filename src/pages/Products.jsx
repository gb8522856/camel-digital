import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import CategoryFilter from '../components/products/CategoryFilter';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">产品中心</h1>
          <p className="text-gray-500">骆驼全系数码配件，品质之选</p>
        </div>

        <div className="mb-8">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelect={handleCategoryChange}
          />
        </div>

        <div className="mb-4 text-sm text-gray-400">
          共 {filteredProducts.length} 件产品
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
