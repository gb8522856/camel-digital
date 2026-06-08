import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch, Grid3X3 } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const iconMap = {
  Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch,
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCat, setHoveredCat] = useState(null);

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

        <div className="flex gap-5 items-start">
          {/* Left Sidebar - Categories */}
          <div className="w-[220px] flex-shrink-0 hidden md:block">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-20 h-auto min-h-[600px] flex flex-col">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-primary to-blue-600 px-5 py-5">
                <div className="flex items-center gap-2">
                  <Grid3X3 size={20} className="text-white" />
                  <span className="text-white font-bold text-lg">产品分类</span>
                </div>
                <p className="text-white/70 text-xs mt-1.5">选择您需要的产品类型</p>
              </div>
              
              {/* Category List */}
              <div className="py-3 flex-1">
                {/* All Products Button */}
                <button
                  onClick={() => handleCategoryChange(null)}
                  onMouseEnter={() => setHoveredCat('all')}
                  onMouseLeave={() => setHoveredCat(null)}
                  className={`w-full text-left px-5 py-4 text-sm transition-all duration-200 flex items-center gap-3 ${
                    activeCategory === null
                      ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                      : hoveredCat === 'all'
                        ? 'bg-gray-50 text-dark border-l-4 border-gray-200'
                        : 'text-gray-600 border-l-4 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    activeCategory === null ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Grid3X3 size={18} />
                  </div>
                  <span>全部产品</span>
                </button>

                {/* Category Items */}
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon] || Zap;
                  const isActive = activeCategory === cat.id;
                  const isHovered = hoveredCat === cat.id;
                  
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      onMouseEnter={() => setHoveredCat(cat.id)}
                      onMouseLeave={() => setHoveredCat(null)}
                      className={`w-full text-left px-5 py-4 text-sm transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                          : isHovered
                            ? 'bg-gray-50 text-dark border-l-4 border-gray-200'
                            : 'text-gray-600 border-l-4 border-transparent hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <span className="flex-1">{cat.name}</span>
                      <span className={`text-xs ${
                        isActive ? 'text-primary' : 'text-gray-400'
                      }`}>
                        {products.filter(p => p.category === cat.id).length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom decoration */}
              <div className="px-5 py-5 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-1 bg-primary/30 rounded-full mx-auto mb-3"></div>
                  <p className="text-xs text-gray-500 font-medium">共 {products.length} 款产品</p>
                  <p className="text-xs text-gray-400 mt-1">品质之选</p>
                </div>
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
            <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-dark">
                  {activeCat ? activeCat.name : '全部产品'}
                </h1>
                <span className="text-sm text-gray-400">
                  共 {filteredProducts.length} 件产品
                </span>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm py-20 text-center text-gray-400">
                <p className="text-sm">暂无相关产品</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
