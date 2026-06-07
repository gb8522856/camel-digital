import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/products', label: '产品中心' },
    { path: '/about', label: '关于我们' },
    { path: '/contact', label: '联系我们' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-dark sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/camel-logo.png" 
              alt="骆驼配件" 
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm leading-tight">骆驼配件</span>
              <span className="text-gold text-[10px] leading-tight">质量保证</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-white border-b-2 border-gold pb-0.5'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/products"
              className="p-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Search size={18} />
            </Link>
            <button
              className="md:hidden p-1.5 text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-3 border-t border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-1 text-sm font-medium border-b border-gray-700 ${
                  isActive(item.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
