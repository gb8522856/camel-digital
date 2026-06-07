import { Link } from 'react-router-dom';
import { Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch } from 'lucide-react';
import { categories } from '../../data/products';

const iconMap = {
  Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch,
};

export default function CategoryGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-dark mb-1">产品分类</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Zap;
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-light transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="text-xs text-dark font-medium text-center leading-tight">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
