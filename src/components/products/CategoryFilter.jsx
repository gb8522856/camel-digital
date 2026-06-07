import { categories } from '../../data/products';

export default function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors text-center ${
          activeCategory === null
            ? 'bg-primary text-white'
            : 'bg-light text-gray-600 hover:bg-gray-200'
        }`}
      >
        全部
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors text-center whitespace-nowrap ${
            activeCategory === cat.id
              ? 'bg-primary text-white'
              : 'bg-light text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
