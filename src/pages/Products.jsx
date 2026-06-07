import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

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

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-4">
          <Link to="/" className="hover:text-primary">首页</Link>
          <span className="mx-1">/</span>
          <span className="text-dark">产品中心</span>
          {activeCat && (
            <>
              <span className="mx-1">/</span>
              <span className="text-dark">{activeCat.name}</span>
            </>
          )}
        </div>

        <div className="flex gap-5">
          {/* Left Sidebar - Categories */}
          <div className="w-[200px] flex-shrink-0 hidden md:block">
            <div className="bg-white rounded shadow-sm overflow-hidden">
              <div className="bg-primary text-white text-center py-3 font-bold text-sm">
                产品分类
              </div>
              <div className="py-1">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    activeCategory === null
                      ? 'bg-primary/5 text-primary font-medium border-l-2 border-primary'
                      : 'text-gray-600 hover:bg-light border-l-2 border-transparent'
                  }`}
                >
                  全部产品
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-primary/5 text-primary font-medium border-l-2 border-primary'
                        : 'text-gray-600 hover:bg-light border-l-2 border-transparent'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Category Filter */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40 px-3 py-2">
            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                  activeCategory === null
                    ? 'bg-primary text-white'
                    : 'bg-light text-gray-600'
                }`}
              >
                全部
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-light text-gray-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Title Bar */}
            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-bold text-dark">
                  {activeCat ? activeCat.name : '全部产品'}
                </h1>
                <span className="text-xs text-gray-400">
                  共 {filteredProducts.length} 件产品
                </span>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded shadow-sm py-20 text-center text-gray-400">
                <p className="text-sm">暂无相关产品</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
