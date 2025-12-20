import React from 'react';
import { LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg-pattern min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-700 font-bold text-sm">大阪開催決定！先行エントリー受付中</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-slate-900">
              業務改善の先にある<br />
              <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">ワクワクする未来</span>を<br />
              シェアしよう。
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Larkはただのツールではありません。<br />
              それは、私たちが「本来の仕事」に熱狂するための武器です。<br />
              <br />
              まだ多くの人が気づいていない今だからこそ、<br />
              <span className="font-bold text-slate-900 bg-yellow-200 px-1">先行者利益</span>をつかみ、新しい働き方のスタンダードを創る。<br />
              <br />
              Entimeたいむと実践者たちが集い、<br />
              生きた事例と可能性を語り尽くす1日。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={LINKS.form}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                サミットに参加する
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
              <a 
                href="#about" 
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-8 py-4 rounded-xl transition flex items-center justify-center"
              >
                詳しく見る
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/50 to-purple-200/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group">
                <img 
                  src="main.jpg" 
                  alt="前回のサミットの様子" 
                  className="w-full h-full object-cover" 
                />
                
                {/* Overlays */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                  <p className="font-bold text-slate-800 text-sm">
                    <i className="fas fa-camera text-blue-500 mr-1"></i> 前回のサミットの様子
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-float">
                  + 6 Special Guests
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;