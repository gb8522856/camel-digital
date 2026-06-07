import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { products, categories } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400 text-lg">产品不存在</p>
        <Link to="/products" className="text-primary mt-4 inline-block">
          返回产品列表
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-primary">首页</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">产品中心</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-dark">{product.name}</span>
        </div>

        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="aspect-square bg-light rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-dark mb-4">{product.name}</h1>
            <p className="text-gray-500 mb-6">{product.description}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-primary font-bold text-3xl">¥{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-gray-400 line-through text-lg">¥{product.originalPrice}</span>
              )}
              {product.originalPrice > product.price && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  省 ¥{product.originalPrice - product.price}
                </span>
              )}
            </div>

            <div className="bg-light rounded-xl p-6 mb-6">
              <h3 className="font-bold text-dark mb-4">产品参数</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span className="text-gray-500">{key}:</span>
                    <span className="text-dark font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
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

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-dark mb-6">相关产品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-light">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-dark line-clamp-1">{p.name}</h3>
                    <span className="text-primary font-bold">¥{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-primary mt-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} /> 返回产品列表
        </Link>
      </div>
    </div>
  );
}
