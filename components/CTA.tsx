import React from 'react';
import { LINKS } from '../constants';

const CTA: React.FC = () => {
  return (
    <section id="register" className="py-24 bg-gradient-to-br from-blue-600 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
          一人で悩むのは、<br />もう終わりにしませんか？
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed">
          ここには、同じ方向を向く仲間がいます。<br />
          最先端のノウハウがあります。<br />
          <br />
          Larkという共通言語で繋がるこの「輪」に入って、<br />
          あなたのビジネスとキャリアを、もっと面白くしましょう。
        </p>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <p className="font-bold text-xl mb-2">先行者利益を掴むチケット</p>
          <div className="text-4xl font-black mb-8">Coming Soon</div>
          
          <a 
            href={LINKS.form} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-xl py-5 rounded-full shadow-lg shadow-orange-500/30 transition transform hover:scale-105 flex items-center justify-center gap-3"
          >
            サミットの席を確保する
            <i className="fas fa-ticket-alt"></i>
          </a>
          <p className="mt-4 text-sm text-blue-200">※定員になり次第、受付を終了します</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;