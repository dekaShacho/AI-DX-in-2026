import React from 'react';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-10 text-center border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <span className="font-bold text-white text-lg">株式会社Entime</span>
          <p className="text-sm mt-1">「面倒くさい」を解消し、人が本来の仕事に熱狂できる世界へ。</p>
        </div>
        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <i className="fab fa-youtube"></i>
          </a>
          <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-xs">© 2026 Entime Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;