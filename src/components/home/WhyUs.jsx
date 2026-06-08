import { Shield, Truck, Headphones, ThumbsUp } from 'lucide-react';

const advantages = [
  { icon: Shield, title: '品质保证', desc: '严选原材料，每一款产品都经过严格质检' },
  { icon: ThumbsUp, title: '价格实惠', desc: '工厂直供，去除中间环节，让利消费者' },
  { icon: Truck, title: '快速发货', desc: '全国仓储，下单后24小时内极速发货' },
  { icon: Headphones, title: '售后无忧', desc: '7天无理由退换，1年质保，终身维护' },
];

export default function WhyUs() {
  return (
    <section className="py-10 bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-dark mb-1">为什么选择我们</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {advantages.map((item, i) => (
            <div key={i} className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
