import { Mail, Send, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">联系我们</h1>
          <p className="text-gray-500">随时欢迎您的咨询</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-dark mb-6">联系方式</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">电子邮件</h3>
                  <a href="mailto:vcxzx04@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
                    vcxzx04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Send size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Telegram</h3>
                  <a href="https://t.me/LuoTuo_ACC" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    @LuoTuo_ACC
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">公司地址</h3>
                  <p className="text-gray-500">中国 · 深圳市南山区科技园</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">工作时间</h3>
                  <p className="text-gray-500">周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-dark mb-6">在线留言</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">您的姓名</label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">电子邮箱</label>
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">留言内容</label>
                <textarea
                  rows={5}
                  placeholder="请输入您的留言内容..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-light transition-colors"
              >
                发送留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
