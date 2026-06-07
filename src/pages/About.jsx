import { Award, Users, Factory, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">关于我们</h1>
          <p className="text-gray-500">了解骆驼数码配件</p>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">品质配件之选</h2>
          <p className="text-white/80 max-w-2xl leading-relaxed">
            骆驼数码配件成立于2018年，专注于高品质数码配件的研发与销售。我们致力于为用户提供安全、便捷、高性价比的数码配件产品，让科技生活更美好。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Clock, num: '2018', label: '成立年份' },
            { icon: Users, num: '50+', label: '团队成员' },
            { icon: Factory, num: '100+', label: '合作工厂' },
            { icon: Award, num: '100万+', label: '服务用户' },
          ].map((item, i) => (
            <div key={i} className="text-center bg-light rounded-xl p-6">
              <item.icon size={32} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-dark mb-1">{item.num}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-light rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">我们的使命</h3>
            <p className="text-gray-600 leading-relaxed">
              通过持续创新和严格品控，为全球消费者提供安全、可靠、高性价比的数码配件产品，让每个人都能享受科技带来的便利。
            </p>
          </div>
          <div className="bg-light rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">我们的愿景</h3>
            <p className="text-gray-600 leading-relaxed">
              成为全球领先的数码配件品牌，以品质赢得信赖，以创新驱动发展，为用户创造更大价值。
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-xl font-bold text-dark mb-6 text-center">核心价值观</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: '品质第一', desc: '严选材料，严格质检' },
              { title: '用户至上', desc: '以用户需求为导向' },
              { title: '持续创新', desc: '技术研发，产品迭代' },
              { title: '诚信经营', desc: '透明价格，真诚服务' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
