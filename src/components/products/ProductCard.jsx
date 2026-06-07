import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow group block border border-gray-100"
    >
      <div className="w-full overflow-hidden bg-light">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '1/1' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full flex items-center justify-center bg-gray-50" style={{ aspectRatio: '1/1' }}>
            <div className="text-center text-gray-300">
              <div className="text-3xl mb-1">📦</div>
              <div className="text-[10px]">暂无图片</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-medium text-dark text-xs line-clamp-2 mb-2 group-hover:text-primary transition-colors leading-relaxed">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-red-500 font-bold text-base">¥{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-gray-400 text-xs line-through">¥{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
