import { Link } from 'react-router-dom';
import { Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch } from 'lucide-react';
import { categories } from '../../data/products';

const iconMap = {
  Zap, Cable, Headphones, Shield, Smartphone, HardDrive, Keyboard, Watch,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">产品分类</h2>
          <p className="text-gray-500">涵盖各类数码配件，满足你的所有需求</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Zap;
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-medium text-dark text-sm">{cat.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
