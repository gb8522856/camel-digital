import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">骆</span>
              </div>
              <div>
                <div className="font-bold text-lg">骆驼配件</div>
                <div className="text-gold text-sm">质量保证</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              骆驼数码配件专注于高品质数码配件的研发与销售，致力于为用户提供安全、便捷、高性价比的数码配件产品。
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="mailto:vcxzx04@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                vcxzx04@gmail.com
              </a>
              <a href="https://t.me/LuoTuo_ACC" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Send size={16} />
                @LuoTuo_ACC
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-gold">快速链接</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">产品中心</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4 text-gold">产品分类</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products?category=charger" className="hover:text-white transition-colors">充电器/充电宝</Link></li>
              <li><Link to="/products?category=cable" className="hover:text-white transition-colors">数据线/转接头</Link></li>
              <li><Link to="/products?category=earphone" className="hover:text-white transition-colors">耳机/音箱</Link></li>
              <li><Link to="/products?category=case" className="hover:text-white transition-colors">手机壳/保护膜</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 骆驼数码配件 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
