import React from 'react';
import { GUESTS, LINKS } from '../constants';
import { Guest } from '../types';

const tagColors: Record<Guest['tagColor'], string> = {
  blue: "text-blue-600 bg-blue-100",
  pink: "text-pink-600 bg-pink-100",
  orange: "text-orange-600 bg-orange-100",
  purple: "text-purple-600 bg-purple-100",
  green: "text-green-600 bg-green-100",
  teal: "text-teal-600 bg-teal-100"
};

const Guests: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-slate-900">その「ワクワク」をシェアする、<br />6人の実践者たち。</h2>
          <p className="text-slate-600">実際にLarkを活用し、成果を出している先駆者が登壇します。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GUESTS.map((guest, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                  <img src={guest.imageUrl} alt={guest.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1 ${tagColors[guest.tagColor]}`}>
                    {guest.tag}
                  </p>
                  <h3 className="font-bold text-lg">{guest.name}</h3>
                </div>
              </div>
              <p className="font-bold text-slate-800 text-sm mb-2 border-b border-slate-200 pb-2">
                {guest.achievement}
              </p>
              <p className="text-slate-600 text-xs leading-relaxed">
                {guest.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Join the Circle */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between text-white shadow-xl border-2 border-blue-500">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl animate-bounce">
              <i className="fas fa-plus"></i>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl">次は、あなたです。</h3>
              <p className="text-slate-300 text-sm">この輪に入って、一緒に未来を創りませんか？</p>
            </div>
          </div>
          <a 
            href={LINKS.form} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition transform hover:scale-105"
          >
            サミットに参加する
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guests;