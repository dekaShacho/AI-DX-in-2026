import React from 'react';
import { LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-black text-xl tracking-tighter text-slate-900">
            AI/DX SUMMIT <span className="text-blue-600">2026</span>
          </span>
        </div>
        <a 
          href={LINKS.form} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-full transition shadow-lg shadow-blue-500/30"
        >
          席を確保する
        </a>
      </div>
    </header>
  );
};

export default Header;