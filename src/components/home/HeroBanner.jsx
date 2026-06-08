import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: '品质配件之选',
    subtitle: '骆驼数码配件',
    desc: '安全、便捷、高性价比的数码配件',
    bg: 'from-primary to-blue-800',
    image: 'https://picsum.photos/seed/slide1/600/400',
  },
  {
    title: '氮化镓快充',
    subtitle: '小体积大能量',
    desc: '65W三口输出，出行必备',
    bg: 'from-gray-800 to-gray-900',
    image: 'https://picsum.photos/seed/slide2/600/400',
  },
  {
    title: '真无线耳机',
    subtitle: '自由无束缚',
    desc: '主动降噪，30小时续航',
    bg: 'from-gold to-yellow-700',
    image: 'https://picsum.photos/seed/slide3/600/400',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative overflow-hidden h-[300px] md:h-[420px] w-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${slide.bg}`}>
            <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-center">
              <div className="flex-1 text-center">
                <p className="text-gold font-medium mb-2 text-sm">{slide.subtitle}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{slide.title}</h1>
                <p className="text-base text-white/80 mb-5">{slide.desc}</p>
                <Link
                  to="/products"
                  className="inline-block bg-white text-primary font-medium px-5 py-2.5 rounded text-sm hover:bg-gray-100 transition-colors"
                >
                  查看产品
                </Link>
              </div>
              <div className="hidden md:block flex-1">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[300px] object-cover rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
