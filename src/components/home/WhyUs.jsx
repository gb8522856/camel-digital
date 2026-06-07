import { Shield, Truck, Headphones, ThumbsUp } from 'lucide-react';

const advantages = [
  { icon: Shield, title: '品质保证', desc: '严选原材料，每一款产品都经过严格质检' },
  { icon: ThumbsUp, title: '价格实惠', desc: '工厂直供，去除中间环节，让利消费者' },
  { icon: Truck, title: '快速发货', desc: '全国仓储，下单后24小时内极速发货' },
  { icon: Headphones, title: '售后无忧', desc: '7天无理由退换，1年质保，终身维护' },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">为什么选择我们</h2>
          <p className="text-gray-400">骆驼配件，值得信赖</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                <item.icon size={32} className="text-primary-light" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
