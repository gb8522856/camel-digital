import { Award, Users, Factory, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="text-xs text-gray-400 mb-4">
          <span className="text-dark">关于我们</span>
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-800 rounded p-6 md:p-8 text-white mb-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">品质配件之选</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">
            骆驼数码配件成立于2018年，专注于高品质数码配件的研发与销售。我们致力于为用户提供安全、便捷、高性价比的数码配件产品，让科技生活更美好。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Clock, num: '2018', label: '成立年份' },
            { icon: Users, num: '50+', label: '团队成员' },
            { icon: Factory, num: '100+', label: '合作工厂' },
            { icon: Award, num: '100万+', label: '服务用户' },
          ].map((item, i) => (
            <div key={i} className="text-center bg-white rounded shadow-sm p-5">
              <item.icon size={28} className="text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-dark mb-1">{item.num}</div>
              <div className="text-xs text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-base font-bold text-dark mb-3">我们的使命</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              通过持续创新和严格品控，为全球消费者提供安全、可靠、高性价比的数码配件产品，让每个人都能享受科技带来的便利。
            </p>
          </div>
          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-base font-bold text-dark mb-3">我们的愿景</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              成为全球领先的数码配件品牌，以品质赢得信赖，以创新驱动发展，为用户创造更大价值。
            </p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm p-6">
          <h3 className="text-base font-bold text-dark mb-4 text-center">核心价值观</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { title: '品质第一', desc: '严选材料，严格质检' },
              { title: '用户至上', desc: '以用户需求为导向' },
              { title: '持续创新', desc: '技术研发，产品迭代' },
              { title: '诚信经营', desc: '透明价格，真诚服务' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-light rounded">
                <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
