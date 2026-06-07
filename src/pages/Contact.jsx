import { Mail, Send, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="text-xs text-gray-400 mb-4">
          <span className="text-dark">联系我们</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded shadow-sm p-6">
            <h2 className="text-base font-bold text-dark mb-5">联系方式</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm mb-1">电子邮件</h3>
                  <a href="mailto:vcxzx04@gmail.com" className="text-gray-500 text-sm hover:text-primary transition-colors block">
                    vcxzx04@gmail.com
                  </a>
                  <a href="mailto:chuli6688@chuli6688.xyz" className="text-gray-500 text-sm hover:text-primary transition-colors block">
                    chuli6688@chuli6688.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Send size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm mb-1">Telegram</h3>
                  <a href="https://t.me/LuoTuo_ACC" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-primary transition-colors">
                    @LuoTuo_ACC
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm mb-1">公司地址</h3>
                  <p className="text-gray-500 text-sm">中国 · 深圳市南山区科技园</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm mb-1">工作时间</h3>
                  <p className="text-gray-500 text-sm">周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded shadow-sm p-6">
            <h2 className="text-base font-bold text-dark mb-5">在线留言</h2>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-dark mb-1">您的姓名</label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-dark mb-1">电子邮箱</label>
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-dark mb-1">留言内容</label>
                <textarea
                  rows={4}
                  placeholder="请输入您的留言内容..."
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-2.5 rounded text-sm hover:bg-primary-light transition-colors"
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
