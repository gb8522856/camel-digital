import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
    >
      <div className="aspect-square overflow-hidden bg-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-dark text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mb-2 line-clamp-1">{product.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-primary font-bold text-lg">¥{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-gray-400 text-xs line-through">¥{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
