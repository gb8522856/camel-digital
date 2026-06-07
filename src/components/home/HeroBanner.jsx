import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: '品质配件之选',
    subtitle: '骆驼数码配件',
    desc: '安全、便捷、高性价比的数码配件',
    bg: 'from-primary to-blue-800',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
  },
  {
    title: '氮化镓快充',
    subtitle: '小体积大能量',
    desc: '65W三口输出，出行必备',
    bg: 'from-gray-800 to-gray-900',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
  },
  {
    title: '真无线耳机',
    subtitle: '自由无束缚',
    desc: '主动降噪，30小时续航',
    bg: 'from-gold to-yellow-700',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=400&fit=crop',
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
    <div className="relative overflow-hidden h-[400px] md:h-[500px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${slide.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="flex-1 text-white">
                <p className="text-gold font-medium mb-2">{slide.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg text-white/80 mb-6">{slide.desc}</p>
                <Link
                  to="/products"
                  className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  查看产品
                </Link>
              </div>
              <div className="hidden md:block flex-1">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[350px] object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
