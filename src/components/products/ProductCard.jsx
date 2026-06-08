import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group block border border-gray-100 hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full overflow-hidden bg-light relative">
        {!imgError ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              style={{ aspectRatio: '1/1' }}
              onError={() => setImgError(true)}
            />
            {/* Discount badge */}
            {product.originalPrice > product.price && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                省¥{product.originalPrice - product.price}
              </div>
            )}
          </>
        ) : (
          <div className="w-full flex items-center justify-center bg-gray-50" style={{ aspectRatio: '1/1' }}>
            <div className="text-center text-gray-300">
              <div className="text-4xl mb-2">📦</div>
              <div className="text-xs">暂无图片</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className={`font-medium text-sm line-clamp-2 mb-2 transition-colors duration-200 ${isHovered ? 'text-primary' : 'text-dark'}`}>
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-red-500 font-bold text-lg">¥{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-gray-400 text-xs line-through">¥{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
