import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <div className="bg-light min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
          <p className="text-gray-400 text-sm">产品不存在</p>
          <Link to="/products" className="text-primary text-sm mt-3 inline-block hover:underline">
            返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-5">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-4">
          <Link to="/" className="hover:text-primary">首页</Link>
          <span className="mx-1">/</span>
          <Link to="/products" className="hover:text-primary">产品中心</Link>
          <span className="mx-1">/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">
            {category?.name}
          </Link>
          <span className="mx-1">/</span>
          <span className="text-dark">{product.name}</span>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded shadow-sm p-6 mb-5">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="bg-light rounded overflow-hidden">
              {!imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  style={{ minHeight: '300px' }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full flex items-center justify-center bg-gray-50" style={{ minHeight: '300px' }}>
                  <div className="text-center text-gray-300">
                    <div className="text-5xl mb-2">📦</div>
                    <div className="text-xs">暂无图片</div>
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h1 className="text-lg font-bold text-dark mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>

              <div className="bg-red-50 rounded p-4 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-red-500 font-bold text-2xl">¥{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through text-sm">¥{product.originalPrice}</span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded">
                      省 ¥{product.originalPrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Specs */}
              <div className="mb-5">
                <h3 className="font-bold text-dark text-sm mb-3 pb-2 border-b">产品参数</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-xs">
                      <Check size={12} className="text-primary flex-shrink-0" />
                      <span className="text-gray-500">{key}:</span>
                      <span className="text-dark font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-5 text-xs text-gray-500 pt-3 border-t">
                <div className="flex items-center gap-1">
                  <Check size={14} className="text-green-500" />
                  品质保证
                </div>
                <div className="flex items-center gap-1">
                  <Check size={14} className="text-green-500" />
                  24小时发货
                </div>
                <div className="flex items-center gap-1">
                  <Check size={14} className="text-green-500" />
                  7天退换
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="bg-white rounded shadow-sm p-5">
            <h2 className="text-sm font-bold text-dark mb-4 pb-2 border-b">相关产品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
